from backend.src.config import settings
from backend.src.http_client import KFSHTTPClient

kfs_client = KFSHTTPClient(
    base_url=settings.KFS_API_URL,
    api_key=settings.KFS_API_KEY,
)