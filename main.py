import fastapi
import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, Response, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import jinja2
from fastapi.templating import Jinja2Templates

app = FastAPI()

# CORS configuration (if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Template directories
templates = Jinja2Templates(directory="templates")
static = Jinja2Templates(directory="static")

# Define your routes
@app.get("/")
def read_root():
    return {"message": "Welcome to the homepage!"}

@app.get("/login")
def login(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.get("/register")
def register(request: Request):
    return templates.TemplateResponse("register.html", {"request": request})

@app.get("/info")
def info(request: Request):
    return templates.TemplateResponse("info.html", {"request": request})

@app.get("/editor")
def editor(request: Request):
    return templates.TemplateResponse("editor.html", {"request": request})

@app.get("/premium")
def prem(request: Request):
    return templates.TemplateResponse("prem.html", {"request": request})

@app.get("/dashboard")
def dash(request: Request):
    return templates.TemplateResponse("dashboard.html", {"request": request})

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=7123)
