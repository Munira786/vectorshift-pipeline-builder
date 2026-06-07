// submit.js

import { useStore } from './store';

export const SubmitButton = () => {

    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        console.log("Nodes:", nodes);
        console.log("Edges:", edges);

        try {

            const response = await fetch(
                'http://127.0.0.1:8000/pipelines/parse',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nodes,
                        edges,
                    }),
                }
            );

            const result = await response.json();

            alert(
                `Pipeline Analysis

Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag}`
            );

        } catch (error) {
            console.error(error);
            alert('Failed to analyze pipeline');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <button
                type="button"
                onClick={handleSubmit}
                style={{
                    background: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                }}
            >
                Analyze Pipeline
            </button>

        </div>
    );
};