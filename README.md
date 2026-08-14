### Project Description

- This is a monorepo application showcasing potential security features (mobile first).
- Application homepage default is a locked screen, with a passcode functionality to access rest of the application.
- Breakpoints enable better experience on screens larger than phone.
- (Optional feature for future) Add encryption before sending credentials to the database table.
- Successful login yields access to a page with folders and applications.
- Shortcuts for applications like facebook, linkedin etc. use same credentials as well as metadata as close as possible to the users data, except the real data is substituted by ChatGPt data.
- Application with calculator icon opens another sign in page which is the actual application with user's real data.

### Instructions to run the application in a docker container (Recommended: thanks Program Earth)

- After installing docker, linux version:
- To start Docker:

```bash
sudo systemctl start docker
```
- Then:
```bash
docker compose -f .docker/docker-compose.yml up -d
```

- To move inside a running container and use commands like pnpm dev, use the command below:
```bash
docker exec -it <container-name> bash
```
https://docs.docker.com/reference/cli/docker/container/exec/, where ```<container-name>``` will be replaced by ```jeannies-chingu``` name of the application container.

- To bring packages inside the container up to date:
```bash
pnpm install
```

##
To start the development application inside the container:
```bash
pnpm dev
```


### Instructions to run the application locally

- To install the dependencies in your local bash terminal, first type:
```pnpm install```
and then hit enter.
- To run the application locally, first type:
``` pnpm run dev```
and then hit enter.
