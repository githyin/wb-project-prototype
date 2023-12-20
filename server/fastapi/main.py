from fastapi import FastAPI
from fastapi_socketio import SocketManager
 
app = FastAPI()
suck = SocketManager
@app.get("/")
async def root():
    return {"message": "Hello World"}