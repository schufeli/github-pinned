FROM denoland/deno:1.13.2

EXPOSE 8080

WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .

RUN deno cache mod.ts

CMD ["run", "--allow-net", "--allow-read", "mod.ts"]