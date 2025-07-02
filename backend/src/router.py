from fastapi import APIRouter

from backend.src.init import kfs_client

router = APIRouter(
    prefix="/items",
)

@router.get("/")
async def get_items():
    return await kfs_client.get_items()

@router.get("/{item_id}")
async def get_item(item_id: int):
    return await kfs_client.get_item(item_id)