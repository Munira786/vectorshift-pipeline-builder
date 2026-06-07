# AI Workflow Builder

A visual pipeline editor built using React Flow and FastAPI.

## Features

* Drag-and-drop workflow builder
* Reusable BaseNode architecture
* Dynamic Text Node variable detection
* Multiple custom node types
* FastAPI backend integration
* DAG validation and pipeline analysis

## Technologies

Frontend:

* React
* React Flow
* JavaScript
* Zustand

Backend:

* FastAPI
* Python

## Setup

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

## Custom Nodes

* Input
* Output
* LLM
* Text
* API
* Database
* Email
* Filter
* Math
