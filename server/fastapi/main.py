from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

# CORS 미들웨어 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React 앱이 실행되는 주소
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# 동적 데이터 반환 함수 (가정)
def get_dynamic_data():
    return {"video_title": "Sample Video", "view_count": 1000, "comments": ["Great!", "Awesome!"]}

# 루트 경로 핸들러
@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    dynamic_data = get_dynamic_data()
    return templates.TemplateResponse("index.html", {"request": request, **dynamic_data})
