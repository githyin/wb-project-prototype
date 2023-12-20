# app.py
from fastapi import FastAPI
from fastapi_socketio import SocketManager

app = FastAPI()
socket_manager = SocketManager(app=app)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@socket_manager.on("dofuck")
async def fucking(sid, *args , **mesh):
    return "good fuck"