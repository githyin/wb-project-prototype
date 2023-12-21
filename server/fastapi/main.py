from fastapi import FastAPI, WebSocket, Request

from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.logger import logger
from starlette.staticfiles import StaticFiles
from fastapi_socketio import SocketManager
 
app = FastAPI()
# HTML 파일을 서비스할 수 있는 Jinja2Templates 설정
templates = Jinja2Templates(directory="templates")

# 정적 파일 (CSS, JavaScript 등)을 서비스할 수 있는 StaticFiles 설정


# 웹소켓 연결을 테스트할 수 있는 웹페이지 (http://127.0.0.1:8000/client)
@app.get("/client", response_class=HTMLResponse)
async def client(request: Request):
    # /templates/client.html 파일을 렌더링하여 반환
    return templates.TemplateResponse("client.html", {"request": request})

# 웹소켓 설정 ws://127.0.0.1:8000/ws 로 접속할 수 있음
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()  # 클라이언트의 웹소켓 접속 허용
    await websocket.send_text(f"Welcome, client: {websocket.client}")
    
    while True:
        data = await websocket.receive_text()  # 클라이언트로부터 메시지 수신 대기
        await websocket.send_text(f"Message received: {data}")  # 클라이언트에게 수신한 메시지 전달

# 개발/디버깅용으로 사용할 앱 구동 함수
def run():
    import uvicorn
    uvicorn.run(app)

# python main.py로 실행할 경우 수행되는 구문
# uvicorn main:app으로 실행할 경우 아래 구문은 수행되지 않는다.
if __name__ == "__main__":
    run()
