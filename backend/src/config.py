from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    KFS_API_URL: str
    KFS_API_KEY: str

    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()