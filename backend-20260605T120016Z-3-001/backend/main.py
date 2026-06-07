
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


class PipelineData(BaseModel):
    nodes: list
    edges: list

@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):

    num_nodes = len(data.nodes)
    num_edges = len(data.edges)

    graph = {}
    indegree = {}

    for node in data.nodes:
        node_id = node["id"]
        graph[node_id] = []
        indegree[node_id] = 0

    for edge in data.edges:
        source = edge["source"]
        target = edge["target"]

        graph[source].append(target)
        indegree[target] += 1

    queue = [node for node in indegree if indegree[node] == 0]
    visited = 0

    while queue:
        current = queue.pop(0)
        visited += 1

        for neighbor in graph[current]:
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = (visited == num_nodes)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
