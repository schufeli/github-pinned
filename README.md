# Github Pinned
![License](https://img.shields.io/github/license/schufeli/github-pinned?label=License)
![Docker workflow](https://github.com/schufeli/github-pinned/actions/workflows/docker.yml/badge.svg)

github-pinned is a small microservice with which you can fetch the six repositories pinned to your repositories. It is written in Typescript with the Deno framework and dockerized for easier usage.

## 📦 Installation
A Docker image is available on the public [docker registry](https://hub.docker.com/r/schufeli/github-pinned) which you can use as you like. The only thing you have to provide to the container is the config.yml file you can also find inside this repo:
```yaml
username: <Github user to fetch from>
token: <Your Github token>
```
***If you need to know how to create a token please consult this [Guide](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)***

### Docker pull
```
docker pull schufeli/github-pinned
```

### Docker run
```
docker run -p "<Port>:8080" --name github-pinned -v ./config.yml:/app/config.yml github-pinned
```
### Docker-Compose
Please have a look at the provided [docker-compose.yml](https://github.com/Schufeli/github-pinned/blob/main/docker-compose.yml) file.

## 🚀 How to use

### Response
If your request was successful you will get a JSON object which is similar to the following example with the description of each element.

```json
[
    {
        "name": "<Repository name>",
        "description": "<Respository description>",
        "url": "<URL to repository>",
        "forkCount": "<Count of forks>",
        "stargazerCount": "<Count of stars",
        "primaryLanguage": {
            "name": "<Language name>",
            "color": "<Language color>"
        }
    }
]
```
