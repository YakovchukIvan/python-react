from aiohttp import ClientSession

class HTTPClient:
    def __init__(self, base_url: str,api_key: str):
        self._session = ClientSession(
            base_url=base_url,
            headers={
                'X-KFS_API_KEY': api_key
            }
        )

class KFSHTTPClient(HTTPClient):
    async def get_items(self):
        async with self._session.get("/items") as resp:
            return await resp.json()

    async def get_item(self, item_id: int):
        async with self._session.get(f"/items/{item_id}") as resp:
            return await resp.json()


# https://650f314454d18aabfe99ec68.mockapi.io/items