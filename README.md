PS C:\workplace\BD_2025\cp\event-tracker\coursework-event-tracker> docker-compose up --build   
time="2025-12-19T20:17:59+03:00" level=warning msg="C:\\workplace\\BD_2025\\cp\\event-tracker\\coursework-event-tracker\\docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion"
[+] Building 2.9s (20/20) FINISHED                                                                                          docker:desktop-linux
 => [backend internal] load build definition from Dockerfile                                                                                0.0s
 => => transferring dockerfile: 274B                                                                                                        0.0s
 => [telegram-bot internal] load metadata for docker.io/library/python:3.11-slim                                                            1.9s
 => [backend auth] library/python:pull token for registry-1.docker.io                                                                       0.0s
 => [backend internal] load .dockerignore                                                                                                   0.0s
 => => transferring context: 2B                                                                                                             0.0s
 => [telegram-bot 1/5] FROM docker.io/library/python:3.11-slim@sha256:158caf0e080e2cd74ef2879ed3c4e697792ee65251c8208b7afb56683c32ea6c      0.1s
 => => resolve docker.io/library/python:3.11-slim@sha256:158caf0e080e2cd74ef2879ed3c4e697792ee65251c8208b7afb56683c32ea6c                   0.0s
 => [backend internal] load build context                                                                                                   0.0s
 => => transferring context: 7.33kB                                                                                                         0.0s
 => CACHED [telegram-bot 2/5] WORKDIR /app                                                                                                  0.0s
 => CACHED [backend 3/5] COPY requirements.txt ./                                                                                           0.0s
 => CACHED [backend 4/5] RUN pip install --no-cache-dir -r requirements.txt                                                                 0.0s
 => [backend 5/5] COPY app ./app                                                                                                            0.0s
 => [backend] exporting to image                                                                                                            0.1s
 => => exporting layers                                                                                                                     0.0s
 => => exporting manifest sha256:b841df374067d236e1eac992ad29c3f308f0438d8a7e872de22e11f2ded322e4                                           0.0s
 => => exporting config sha256:bce7b4e1b72b1273af85db61ce47a8876697912ce0f5d63edaf5e74997b5f4b2                                             0.0s
 => => exporting attestation manifest sha256:f8b8ada1b292d4354f1ff2cde874fb6ae5defc7f93db804b130715c981f7cb5d                               0.0s
 => => exporting manifest list sha256:d904701e5fc53856f86f2f34fd0de535f1eacd800bbb65b9a843147fbdd4efa3                                      0.0s
 => => naming to docker.io/library/coursework-event-tracker-backend:latest                                                                  0.0s 
 => => unpacking to docker.io/library/coursework-event-tracker-backend:latest                                                               0.0s 
 => [backend] resolving provenance for metadata file                                                                                        0.0s
 => [telegram-bot internal] load build definition from Dockerfile                                                                           0.0s 
 => => transferring dockerfile: 212B                                                                                                        0.0s 
 => [telegram-bot internal] load .dockerignore                                                                                              0.0s 
 => => transferring context: 2B                                                                                                             0.0s 
 => [telegram-bot internal] load build context                                                                                              0.0s 
 => => transferring context: 530B                                                                                                           0.0s 
 => CACHED [telegram-bot 3/5] COPY requirements.txt requirements.txt                                                                        0.0s 
 => CACHED [telegram-bot 4/5] RUN pip install --no-cache-dir -r requirements.txt                                                            0.0s 
 => CACHED [telegram-bot 5/5] COPY . .                                                                                                      0.0s 
 => [telegram-bot] exporting to image                                                                                                       0.1s 
 => => exporting layers                                                                                                                     0.0s 
 => => exporting manifest sha256:f35cbccbfbafaa2dabc389285791d274d72d81a83cb0aea9f72516ad63866939                                           0.0s 
 => => exporting config sha256:03067840d545471f6e5182085306723a76d632cde1f3818757113f38f36868b1                                             0.0s 
 => => exporting attestation manifest sha256:2768e26500f371f825de554f9e1da810a5be7066094e0253dff7594ca1f446f2                               0.0s 
 => => exporting manifest list sha256:8f66ae51102ab03f4f8715b33db6913f0dd1b4dc8a628c67cf2e315aa436b2fc                                      0.0s 
 => => naming to docker.io/library/coursework-event-tracker-telegram-bot:latest                                                             0.0s 
 => => unpacking to docker.io/library/coursework-event-tracker-telegram-bot:latest                                                          0.0s 
 => [telegram-bot] resolving provenance for metadata file                                                                                   0.0s 
[+] Running 8/8
 ✔ backend                                            Built                                                                                 0.0s 
 ✔ telegram-bot                                       Built                                                                                 0.0s 
 ✔ Network coursework-event-tracker_default           Created                                                                               0.2s 
 ✔ Container coursework-event-tracker-db-1            Created                                                                               0.1s 
 ✔ Container coursework-event-tracker-frontend-1      Created                                                                               0.1s 
 ✔ Container coursework-event-tracker-pgadmin-1       Created                                                                               0.2s 
 ✔ Container coursework-event-tracker-backend-1       Created                                                                               0.2s 
 ✔ Container coursework-event-tracker-telegram-bot-1  Created                                                                               0.2s 
Attaching to backend-1, db-1, frontend-1, pgadmin-1, telegram-bot-1
frontend-1      | /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
frontend-1      | /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
frontend-1      | /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh                                          
frontend-1      | 10-listen-on-ipv6-by-default.sh: info: can not modify /etc/nginx/conf.d/default.conf (read-only file system?)
frontend-1      | /docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh                                                  
frontend-1      | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh                                              
frontend-1      | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
frontend-1      | /docker-entrypoint.sh: Configuration complete; ready for start up                                                              
db-1            |                                                                                                                                
db-1            | PostgreSQL Database directory appears to contain a database; Skipping initialization
db-1            |                                                                                                                                
db-1            | 2025-12-19 17:18:04.323 UTC [1] LOG:  starting PostgreSQL 15.15 (Debian 15.15-1.pgdg13+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
db-1            | 2025-12-19 17:18:04.323 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
db-1            | 2025-12-19 17:18:04.323 UTC [1] LOG:  listening on IPv6 address "::", port 5432
db-1            | 2025-12-19 17:18:04.333 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"                             
db-1            | 2025-12-19 17:18:04.342 UTC [29] LOG:  database system was shut down at 2025-12-19 17:16:59 UTC
db-1            | 2025-12-19 17:18:04.349 UTC [1] LOG:  database system is ready to accept connections                                           
pgadmin-1       | email config is {'CHECK_EMAIL_DELIVERABILITY': False, 'ALLOW_SPECIAL_EMAIL_DOMAINS': [], 'GLOBALLY_DELIVERABLE': True}         
backend-1       | /usr/local/lib/python3.11/site-packages/pydantic/_internal/_config.py:383: UserWarning: Valid config keys have changed in V2:
backend-1       | * 'orm_mode' has been renamed to 'from_attributes'
backend-1       |   warnings.warn(message, UserWarning)                                                                                          
backend-1       | /usr/local/lib/python3.11/site-packages/pydantic/_internal/_config.py:383: UserWarning: Valid config keys have changed in V2:  
backend-1       | * 'orm_mode' has been renamed to 'from_attributes'
backend-1       |   warnings.warn(message, UserWarning)                                                                                          
backend-1       | /usr/local/lib/python3.11/site-packages/pydantic/_internal/_config.py:383: UserWarning: Valid config keys have changed in V2:  
backend-1       | * 'orm_mode' has been renamed to 'from_attributes'
backend-1       |   warnings.warn(message, UserWarning)                                                                                          
backend-1       | /usr/local/lib/python3.11/site-packages/pydantic/_internal/_config.py:383: UserWarning: Valid config keys have changed in V2:  
backend-1       | * 'orm_mode' has been renamed to 'from_attributes'
backend-1       |   warnings.warn(message, UserWarning)                                                                                          
backend-1       | INFO:     Started server process [1]                                                                                           
backend-1       | INFO:     Waiting for application startup.
backend-1       | INFO:     Application startup complete.                                                                                        
backend-1       | INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: using the "epoll" event method                                                               
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: nginx/1.29.4
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: built by gcc 15.2.0 (Alpine 15.2.0) 
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: OS: Linux 6.6.87.2-microsoft-standard-WSL2                                                   
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: start worker processes                                                                       
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: start worker process 21                                                                      
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: start worker process 22
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: start worker process 23                                                                      
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: start worker process 24                                                                      
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: start worker process 25
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: start worker process 26                                                                      
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: start worker process 27
frontend-1      | 2025/12/19 17:18:04 [notice] 1#1: start worker process 28                                                                      
telegram-bot-1  | INFO:aiogram.dispatcher:Start polling                                                                                          
telegram-bot-1  | INFO:aiogram.dispatcher:Run polling for bot @bd_nik_bot id=8531294438 - 'bd'
pgadmin-1       | /venv/lib/python3.14/site-packages/sshtunnel.py:1040: SyntaxWarning: 'return' in a 'finally' block
pgadmin-1       |   return (ssh_host,
pgadmin-1       | NOTE: Configuring authentication for SERVER mode.                                                                              
pgadmin-1       | 
pgadmin-1       | pgAdmin 4 - Application Initialisation                                                                                         
pgadmin-1       | ======================================                                                                                         
pgadmin-1       |                                                                                                                                
pgadmin-1       | postfix/postlog: starting the Postfix mail system                                                                              
backend-1       | INFO:     172.20.0.6:41802 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error
backend-1       | ERROR:    Exception in ASGI application
backend-1       | Traceback (most recent call last):
telegram-bot-1  | WARNING:root:User lookup failed: 500 Internal Server Error                                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi               
backend-1       |     result = await app(  # type: ignore[func-returns-value]
db-1            | 2025-12-19 17:18:22.410 UTC [34] ERROR:  duplicate key value violates unique constraint "users_telegram_id_key"                
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
db-1            | 2025-12-19 17:18:22.410 UTC [34] DETAIL:  Key (telegram_id)=(705415199) already exists.                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__                     
telegram-bot-1  | WARNING:root:User create failed: 500 Internal Server Error
db-1            | 2025-12-19 17:18:22.410 UTC [34] STATEMENT:  INSERT INTO users (telegram_id, username, password_hash, created_at, is_active) VALUES ('705415199', 's4pfir', 'telegram', '2025-12-19T17:18:22.408361'::timestamp, true) RETURNING users.id                                       
backend-1       |     return await self.app(scope, receive, send)
telegram-bot-1  | WARNING:root:User lookup retry failed: 500 Internal Server Error                                                               
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1135, in __call__                               
backend-1       |     await super().__call__(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 107, in __call__                              
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__                         
backend-1       |     await self.app(scope, receive, _send)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 191, in __call__
backend-1       |     with recv_stream, send_stream, collapse_excgroups():                                                                       
backend-1       |   File "/usr/local/lib/python3.11/contextlib.py", line 158, in __exit__                                                        
backend-1       |     self.gen.throw(typ, value, traceback)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_utils.py", line 85, in collapse_excgroups
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 193, in __call__
backend-1       |     response = await self.dispatch_func(request, call_next)                                                                    
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/app/app/main.py", line 50, in telegram_header_middleware                                                              
backend-1       |     response = await call_next(request)
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 168, in call_next                          
backend-1       |     raise app_exc from app_exc.__cause__ or app_exc.__context__
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 144, in coro                               
backend-1       |     await self.app(scope, receive_or_disconnect, send_no_error)                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/cors.py", line 85, in __call__                            
backend-1       |     await self.app(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 63, in __call__                      
backend-1       |     await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__                    
backend-1       |     await self.app(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 716, in __call__                                   
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 736, in app                                        
backend-1       |     await route.handle(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 290, in handle                                     
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 118, in app                                          
backend-1       |     await wrap_app_handling_exceptions(app, request)(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 104, in app
backend-1       |     response = await f(request)                                                                                                
backend-1       |                ^^^^^^^^^^^^^^^^                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 428, in app                                          
backend-1       |     raw_response = await run_endpoint_function(                                                                                
backend-1       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 316, in run_endpoint_function                        
backend-1       |     return await run_in_threadpool(dependant.call, **values)                                                                   
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool                       
backend-1       |     return await anyio.to_thread.run_sync(func)
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/to_thread.py", line 61, in run_sync                                      
backend-1       |     return await get_async_backend().run_sync_in_worker_thread(                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 2525, in run_sync_in_worker_thread          
backend-1       |     return await future                                                                                                        
backend-1       |            ^^^^^^^^^^^^                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 986, in run                                 
backend-1       |     result = context.run(func, *args)
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                          
backend-1       |   File "/app/app/routers/users.py", line 29, in get_me                                                                         
backend-1       |     return _serialize_user(user)                                                                                               
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/app/app/routers/users.py", line 17, in _serialize_user                                                                
backend-1       |     data = UserOut.model_validate(user)                                                                                        
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/pydantic/main.py", line 716, in model_validate
backend-1       |     return cls.__pydantic_validator__.validate_python(                                                                         
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                         
backend-1       | pydantic_core._pydantic_core.ValidationError: 1 validation error for UserOut                                                   
backend-1       | roles.0                                                                                                                        
backend-1       |   Input should be a valid string [type=string_type, input_value=<app.models.UserRole object at 0x7c15ddb87fd0>, input_type=UserRole]                                                                                                                                            
backend-1       |     For further information visit https://errors.pydantic.dev/2.12/v/string_type
backend-1       | INFO:     172.20.0.6:41814 - "POST /api/users HTTP/1.1" 500 Internal Server Error                                              
backend-1       | ERROR:    Exception in ASGI application                                                                                        
backend-1       | Traceback (most recent call last):
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi               
backend-1       |     result = await app(  # type: ignore[func-returns-value]                                                                    
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
telegram-bot-1  | INFO:aiogram.event:Update id=946816209 is handled. Duration 466 ms by bot id=8531294438
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__                     
backend-1       |     return await self.app(scope, receive, send)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1135, in __call__
backend-1       |     await super().__call__(scope, receive, send)                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 107, in __call__                              
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__                         
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__                         
backend-1       |     await self.app(scope, receive, _send)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 191, in __call__                           
backend-1       |     with recv_stream, send_stream, collapse_excgroups():
backend-1       |   File "/usr/local/lib/python3.11/contextlib.py", line 158, in __exit__                                                        
backend-1       |     self.gen.throw(typ, value, traceback)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_utils.py", line 85, in collapse_excgroups                           
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 193, in __call__
backend-1       |     response = await self.dispatch_func(request, call_next)                                                                    
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/app/app/main.py", line 50, in telegram_header_middleware                                                              
backend-1       |     response = await call_next(request)
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 168, in call_next                          
backend-1       |     raise app_exc from app_exc.__cause__ or app_exc.__context__                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 144, in coro                               
backend-1       |     await self.app(scope, receive_or_disconnect, send_no_error)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/cors.py", line 85, in __call__                            
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 63, in __call__                      
backend-1       |     await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 716, in __call__                                   
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 736, in app                                        
backend-1       |     await route.handle(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 290, in handle                                     
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 118, in app                                          
backend-1       |     await wrap_app_handling_exceptions(app, request)(scope, receive, send)                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 104, in app                                          
backend-1       |     response = await f(request)
backend-1       |                ^^^^^^^^^^^^^^^^                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 428, in app                                          
backend-1       |     raw_response = await run_endpoint_function(                                                                                
backend-1       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 316, in run_endpoint_function
backend-1       |     return await run_in_threadpool(dependant.call, **values)                                                                   
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool                       
backend-1       |     return await anyio.to_thread.run_sync(func)
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/to_thread.py", line 61, in run_sync                                      
backend-1       |     return await get_async_backend().run_sync_in_worker_thread(                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 2525, in run_sync_in_worker_thread
backend-1       |     return await future                                                                                                        
backend-1       |            ^^^^^^^^^^^^                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 986, in run                                 
backend-1       |     result = context.run(func, *args)
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                          
backend-1       |   File "/app/app/routers/users.py", line 44, in create_user                                                                    
backend-1       |     return _serialize_user(existing)                                                                                           
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/app/app/routers/users.py", line 17, in _serialize_user                                                                
backend-1       |     data = UserOut.model_validate(user)                                                                                        
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/pydantic/main.py", line 716, in model_validate                                 
backend-1       |     return cls.__pydantic_validator__.validate_python(
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                         
backend-1       | pydantic_core._pydantic_core.ValidationError: 1 validation error for UserOut                                                   
backend-1       | roles.0                                                                                                                        
backend-1       |   Input should be a valid string [type=string_type, input_value=<app.models.UserRole object at 0x7c15dab1dcd0>, input_type=UserRole]                                                                                                                                            
backend-1       |     For further information visit https://errors.pydantic.dev/2.12/v/string_type
backend-1       | INFO:     172.20.0.6:41820 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error                                            
backend-1       | ERROR:    Exception in ASGI application                                                                                        
backend-1       | Traceback (most recent call last):
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi               
backend-1       |     result = await app(  # type: ignore[func-returns-value]                                                                    
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__
backend-1       |     return await self.app(scope, receive, send)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1135, in __call__                               
backend-1       |     await super().__call__(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 107, in __call__                              
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__                         
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__
backend-1       |     await self.app(scope, receive, _send)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 191, in __call__                           
backend-1       |     with recv_stream, send_stream, collapse_excgroups():                                                                       
backend-1       |   File "/usr/local/lib/python3.11/contextlib.py", line 158, in __exit__
backend-1       |     self.gen.throw(typ, value, traceback)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_utils.py", line 85, in collapse_excgroups                           
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 193, in __call__
backend-1       |     response = await self.dispatch_func(request, call_next)                                                                    
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/app/app/main.py", line 50, in telegram_header_middleware
backend-1       |     response = await call_next(request)                                                                                        
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 168, in call_next                          
backend-1       |     raise app_exc from app_exc.__cause__ or app_exc.__context__                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 144, in coro                               
backend-1       |     await self.app(scope, receive_or_disconnect, send_no_error)                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/cors.py", line 85, in __call__
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 63, in __call__                      
backend-1       |     await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 716, in __call__                                   
backend-1       |     await self.middleware_stack(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 736, in app                                        
backend-1       |     await route.handle(scope, receive, send)                                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 290, in handle                                     
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 118, in app
backend-1       |     await wrap_app_handling_exceptions(app, request)(scope, receive, send)                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 104, in app                                          
backend-1       |     response = await f(request)
backend-1       |                ^^^^^^^^^^^^^^^^                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 428, in app                                          
backend-1       |     raw_response = await run_endpoint_function(                                                                                
backend-1       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 316, in run_endpoint_function                        
backend-1       |     return await run_in_threadpool(dependant.call, **values)                                                                   
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool
backend-1       |     return await anyio.to_thread.run_sync(func)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/to_thread.py", line 61, in run_sync                                      
backend-1       |     return await get_async_backend().run_sync_in_worker_thread(
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 2525, in run_sync_in_worker_thread          
backend-1       |     return await future                                                                                                        
backend-1       |            ^^^^^^^^^^^^                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 986, in run
backend-1       |     result = context.run(func, *args)                                                                                          
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                          
backend-1       |   File "/app/app/routers/users.py", line 29, in get_me                                                                         
backend-1       |     return _serialize_user(user)
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^                                                                                               
backend-1       |   File "/app/app/routers/users.py", line 17, in _serialize_user                                                                
backend-1       |     data = UserOut.model_validate(user)                                                                                        
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/pydantic/main.py", line 716, in model_validate                                 
backend-1       |     return cls.__pydantic_validator__.validate_python(                                                                         
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                         
backend-1       | pydantic_core._pydantic_core.ValidationError: 1 validation error for UserOut
backend-1       | roles.0                                                                                                                        
backend-1       |   Input should be a valid string [type=string_type, input_value=<app.models.UserRole object at 0x7c15dab28fd0>, input_type=UserRole]                                                                                                                                            
backend-1       |     For further information visit https://errors.pydantic.dev/2.12/v/string_type
pgadmin-1       | [2025-12-19 17:18:30 +0000] [1] [INFO] Starting gunicorn 23.0.0
pgadmin-1       | [2025-12-19 17:18:30 +0000] [1] [INFO] Listening at: http://[::]:80 (1)
pgadmin-1       | [2025-12-19 17:18:30 +0000] [1] [INFO] Using worker: gthread                                                                   
pgadmin-1       | [2025-12-19 17:18:30 +0000] [123] [INFO] Booting worker with pid: 123                                                          
pgadmin-1       | /venv/lib/python3.14/site-packages/sshtunnel.py:1040: SyntaxWarning: 'return' in a 'finally' block                             
pgadmin-1       |   return (ssh_host,
frontend-1      | 172.20.0.1 - - [19/Dec/2025:17:18:31 +0000] "GET / HTTP/1.1" 200 7309 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"
frontend-1      | 172.20.0.1 - - [19/Dec/2025:17:18:32 +0000] "GET /app.js HTTP/1.1" 200 19409 "https://1aa7038ac739.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"
backend-1       | INFO:     172.20.0.2:42422 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error
frontend-1      | 172.20.0.1 - - [19/Dec/2025:17:18:34 +0000] "GET /api/users/me HTTP/1.1" 500 21 "https://1aa7038ac739.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"          
backend-1       | ERROR:    Exception in ASGI application
backend-1       | Traceback (most recent call last):                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi
backend-1       |     result = await app(  # type: ignore[func-returns-value]                                                                    
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__
backend-1       |     return await self.app(scope, receive, send)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1135, in __call__                               
backend-1       |     await super().__call__(scope, receive, send)
frontend-1      | 172.20.0.1 - - [19/Dec/2025:17:18:34 +0000] "GET /favicon.ico HTTP/1.1" 200 7309 "https://1aa7038ac739.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"         
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 107, in __call__
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__                         
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__
backend-1       |     await self.app(scope, receive, _send)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 191, in __call__
backend-1       |     with recv_stream, send_stream, collapse_excgroups():                                                                       
backend-1       |   File "/usr/local/lib/python3.11/contextlib.py", line 158, in __exit__                                                        
backend-1       |     self.gen.throw(typ, value, traceback)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_utils.py", line 85, in collapse_excgroups                           
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 193, in __call__                           
backend-1       |     response = await self.dispatch_func(request, call_next)
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/app/app/main.py", line 50, in telegram_header_middleware                                                              
backend-1       |     response = await call_next(request)                                                                                        
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 168, in call_next                          
backend-1       |     raise app_exc from app_exc.__cause__ or app_exc.__context__                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 144, in coro
backend-1       |     await self.app(scope, receive_or_disconnect, send_no_error)                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/cors.py", line 85, in __call__
backend-1       |     await self.app(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 63, in __call__                      
backend-1       |     await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
frontend-1      | 172.20.0.1 - - [19/Dec/2025:17:18:34 +0000] "GET /api/categories HTTP/1.1" 200 608 "https://1aa7038ac739.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"       
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 716, in __call__                                   
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 736, in app
backend-1       |     await route.handle(scope, receive, send)                                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 290, in handle
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 118, in app                                          
backend-1       |     await wrap_app_handling_exceptions(app, request)(scope, receive, send)                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 104, in app                                          
backend-1       |     response = await f(request)                                                                                                
backend-1       |                ^^^^^^^^^^^^^^^^                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 428, in app
backend-1       |     raw_response = await run_endpoint_function(                                                                                
backend-1       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 316, in run_endpoint_function                        
backend-1       |     return await run_in_threadpool(dependant.call, **values)
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool                       
backend-1       |     return await anyio.to_thread.run_sync(func)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/to_thread.py", line 61, in run_sync                                      
backend-1       |     return await get_async_backend().run_sync_in_worker_thread(                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 2525, in run_sync_in_worker_thread          
backend-1       |     return await future                                                                                                        
backend-1       |            ^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 986, in run                                 
backend-1       |     result = context.run(func, *args)                                                                                          
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                          
backend-1       |   File "/app/app/routers/users.py", line 29, in get_me
backend-1       |     return _serialize_user(user)                                                                                               
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^                                                                                               
backend-1       |   File "/app/app/routers/users.py", line 17, in _serialize_user                                                                
backend-1       |     data = UserOut.model_validate(user)
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/pydantic/main.py", line 716, in model_validate                                 
backend-1       |     return cls.__pydantic_validator__.validate_python(                                                                         
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                         
backend-1       | pydantic_core._pydantic_core.ValidationError: 1 validation error for UserOut                                                   
backend-1       | roles.0                                                                                                                        
backend-1       |   Input should be a valid string [type=string_type, input_value=<app.models.UserRole object at 0x7c15dab2be90>, input_type=UserRole]                                                                                                                                            
backend-1       |     For further information visit https://errors.pydantic.dev/2.12/v/string_type
backend-1       | INFO:     172.20.0.2:42430 - "GET /api/categories HTTP/1.1" 200 OK                                                             
backend-1       | INFO:     172.20.0.6:52702 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error                                            
backend-1       | ERROR:    Exception in ASGI application
backend-1       | Traceback (most recent call last):
telegram-bot-1  | WARNING:root:User lookup failed: 500 Internal Server Error                                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi               
db-1            | 2025-12-19 17:18:40.876 UTC [34] ERROR:  duplicate key value violates unique constraint "users_telegram_id_key"
backend-1       |     result = await app(  # type: ignore[func-returns-value]                                                                    
db-1            | 2025-12-19 17:18:40.876 UTC [34] DETAIL:  Key (telegram_id)=(705415199) already exists.                                        
telegram-bot-1  | WARNING:root:User create failed: 500 Internal Server Error
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
db-1            | 2025-12-19 17:18:40.876 UTC [34] STATEMENT:  INSERT INTO users (telegram_id, username, password_hash, created_at, is_active) VALUES ('705415199', 's4pfir', 'telegram', '2025-12-19T17:18:40.875348'::timestamp, true) RETURNING users.id                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__
telegram-bot-1  | WARNING:root:User lookup retry failed: 500 Internal Server Error                                                               
backend-1       |     return await self.app(scope, receive, send)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1135, in __call__                               
backend-1       |     await super().__call__(scope, receive, send)                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 107, in __call__                              
backend-1       |     await self.middleware_stack(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__                         
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__
backend-1       |     await self.app(scope, receive, _send)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 191, in __call__                           
backend-1       |     with recv_stream, send_stream, collapse_excgroups():                                                                       
backend-1       |   File "/usr/local/lib/python3.11/contextlib.py", line 158, in __exit__                                                        
backend-1       |     self.gen.throw(typ, value, traceback)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_utils.py", line 85, in collapse_excgroups                           
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 193, in __call__                           
backend-1       |     response = await self.dispatch_func(request, call_next)                                                                    
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/app/app/main.py", line 50, in telegram_header_middleware                                                              
backend-1       |     response = await call_next(request)                                                                                        
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 168, in call_next                          
backend-1       |     raise app_exc from app_exc.__cause__ or app_exc.__context__
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 144, in coro                               
backend-1       |     await self.app(scope, receive_or_disconnect, send_no_error)                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/cors.py", line 85, in __call__                            
backend-1       |     await self.app(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 63, in __call__                      
backend-1       |     await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__                    
backend-1       |     await self.app(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 716, in __call__                                   
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 736, in app                                        
backend-1       |     await route.handle(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 290, in handle                                     
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 118, in app                                          
backend-1       |     await wrap_app_handling_exceptions(app, request)(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 104, in app                                          
backend-1       |     response = await f(request)                                                                                                
backend-1       |                ^^^^^^^^^^^^^^^^                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 428, in app
backend-1       |     raw_response = await run_endpoint_function(                                                                                
backend-1       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 316, in run_endpoint_function                        
backend-1       |     return await run_in_threadpool(dependant.call, **values)                                                                   
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool                       
backend-1       |     return await anyio.to_thread.run_sync(func)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/to_thread.py", line 61, in run_sync                                      
backend-1       |     return await get_async_backend().run_sync_in_worker_thread(
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 2525, in run_sync_in_worker_thread          
backend-1       |     return await future                                                                                                        
backend-1       |            ^^^^^^^^^^^^                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 986, in run
backend-1       |     result = context.run(func, *args)                                                                                          
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                          
backend-1       |   File "/app/app/routers/users.py", line 29, in get_me                                                                         
backend-1       |     return _serialize_user(user)
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^                                                                                               
backend-1       |   File "/app/app/routers/users.py", line 17, in _serialize_user                                                                
backend-1       |     data = UserOut.model_validate(user)                                                                                        
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/pydantic/main.py", line 716, in model_validate
backend-1       |     return cls.__pydantic_validator__.validate_python(                                                                         
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                         
backend-1       | pydantic_core._pydantic_core.ValidationError: 1 validation error for UserOut                                                   
backend-1       | roles.0                                                                                                                        
backend-1       |   Input should be a valid string [type=string_type, input_value=<app.models.UserRole object at 0x7c15dab2a090>, input_type=UserRole]                                                                                                                                            
backend-1       |     For further information visit https://errors.pydantic.dev/2.12/v/string_type
backend-1       | INFO:     172.20.0.6:52710 - "POST /api/users HTTP/1.1" 500 Internal Server Error                                              
backend-1       | ERROR:    Exception in ASGI application                                                                                        
backend-1       | Traceback (most recent call last):                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi
backend-1       |     result = await app(  # type: ignore[func-returns-value]                                                                    
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__                     
backend-1       |     return await self.app(scope, receive, send)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1135, in __call__                               
backend-1       |     await super().__call__(scope, receive, send)                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 107, in __call__                              
backend-1       |     await self.middleware_stack(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__                         
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__                         
backend-1       |     await self.app(scope, receive, _send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 191, in __call__                           
backend-1       |     with recv_stream, send_stream, collapse_excgroups():                                                                       
backend-1       |   File "/usr/local/lib/python3.11/contextlib.py", line 158, in __exit__                                                        
backend-1       |     self.gen.throw(typ, value, traceback)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_utils.py", line 85, in collapse_excgroups
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 193, in __call__                           
backend-1       |     response = await self.dispatch_func(request, call_next)                                                                    
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/app/app/main.py", line 50, in telegram_header_middleware                                                              
backend-1       |     response = await call_next(request)                                                                                        
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 168, in call_next                          
backend-1       |     raise app_exc from app_exc.__cause__ or app_exc.__context__
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 144, in coro                               
backend-1       |     await self.app(scope, receive_or_disconnect, send_no_error)                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/cors.py", line 85, in __call__                            
backend-1       |     await self.app(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 63, in __call__                      
backend-1       |     await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__                    
backend-1       |     await self.app(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 716, in __call__                                   
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 736, in app                                        
backend-1       |     await route.handle(scope, receive, send)                                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 290, in handle                                     
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 118, in app                                          
backend-1       |     await wrap_app_handling_exceptions(app, request)(scope, receive, send)                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 104, in app                                          
backend-1       |     response = await f(request)                                                                                                
backend-1       |                ^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 428, in app                                          
backend-1       |     raw_response = await run_endpoint_function(                                                                                
backend-1       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 316, in run_endpoint_function                        
backend-1       |     return await run_in_threadpool(dependant.call, **values)
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool                       
backend-1       |     return await anyio.to_thread.run_sync(func)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/to_thread.py", line 61, in run_sync                                      
backend-1       |     return await get_async_backend().run_sync_in_worker_thread(                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 2525, in run_sync_in_worker_thread
backend-1       |     return await future                                                                                                        
backend-1       |            ^^^^^^^^^^^^                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 986, in run                                 
backend-1       |     result = context.run(func, *args)
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                          
backend-1       |   File "/app/app/routers/users.py", line 44, in create_user                                                                    
backend-1       |     return _serialize_user(existing)                                                                                           
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/app/app/routers/users.py", line 17, in _serialize_user                                                                
backend-1       |     data = UserOut.model_validate(user)                                                                                        
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/pydantic/main.py", line 716, in model_validate
backend-1       |     return cls.__pydantic_validator__.validate_python(                                                                         
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                         
backend-1       | pydantic_core._pydantic_core.ValidationError: 1 validation error for UserOut
backend-1       | roles.0                                                                                                                        
backend-1       |   Input should be a valid string [type=string_type, input_value=<app.models.UserRole object at 0x7c15dab4db10>, input_type=UserRole]                                                                                                                                            
backend-1       |     For further information visit https://errors.pydantic.dev/2.12/v/string_type
backend-1       | INFO:     172.20.0.6:52712 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error
backend-1       | ERROR:    Exception in ASGI application                                                                                        
backend-1       | Traceback (most recent call last):                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi               
backend-1       |     result = await app(  # type: ignore[func-returns-value]
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__                     
backend-1       |     return await self.app(scope, receive, send)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1135, in __call__                               
backend-1       |     await super().__call__(scope, receive, send)                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 107, in __call__                              
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__                         
backend-1       |     await self.app(scope, receive, _send)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 191, in __call__                           
backend-1       |     with recv_stream, send_stream, collapse_excgroups():
backend-1       |   File "/usr/local/lib/python3.11/contextlib.py", line 158, in __exit__                                                        
backend-1       |     self.gen.throw(typ, value, traceback)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_utils.py", line 85, in collapse_excgroups                           
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 193, in __call__
backend-1       |     response = await self.dispatch_func(request, call_next)                                                                    
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/app/app/main.py", line 50, in telegram_header_middleware                                                              
backend-1       |     response = await call_next(request)                                                                                        
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 168, in call_next                          
backend-1       |     raise app_exc from app_exc.__cause__ or app_exc.__context__                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 144, in coro                               
backend-1       |     await self.app(scope, receive_or_disconnect, send_no_error)                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/cors.py", line 85, in __call__
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 63, in __call__                      
backend-1       |     await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
telegram-bot-1  | INFO:aiogram.event:Update id=946816210 is handled. Duration 833 ms by bot id=8531294438                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__
backend-1       |     await self.app(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 716, in __call__
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 736, in app
backend-1       |     await route.handle(scope, receive, send)                                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 290, in handle
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 118, in app                                          
backend-1       |     await wrap_app_handling_exceptions(app, request)(scope, receive, send)                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 104, in app                                          
backend-1       |     response = await f(request)
backend-1       |                ^^^^^^^^^^^^^^^^                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 428, in app                                          
backend-1       |     raw_response = await run_endpoint_function(                                                                                
backend-1       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 316, in run_endpoint_function
backend-1       |     return await run_in_threadpool(dependant.call, **values)                                                                   
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool                       
backend-1       |     return await anyio.to_thread.run_sync(func)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/to_thread.py", line 61, in run_sync                                      
backend-1       |     return await get_async_backend().run_sync_in_worker_thread(                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 2525, in run_sync_in_worker_thread
backend-1       |     return await future                                                                                                        
backend-1       |            ^^^^^^^^^^^^                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 986, in run                                 
backend-1       |     result = context.run(func, *args)
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                          
backend-1       |   File "/app/app/routers/users.py", line 29, in get_me                                                                         
backend-1       |     return _serialize_user(user)                                                                                               
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^                                                                                               
backend-1       |   File "/app/app/routers/users.py", line 17, in _serialize_user
backend-1       |     data = UserOut.model_validate(user)                                                                                        
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/pydantic/main.py", line 716, in model_validate                                 
backend-1       |     return cls.__pydantic_validator__.validate_python(                                                                         
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       | pydantic_core._pydantic_core.ValidationError: 1 validation error for UserOut                                                   
backend-1       | roles.0                                                                                                                        
backend-1       |   Input should be a valid string [type=string_type, input_value=<app.models.UserRole object at 0x7c15dab3f090>, input_type=UserRole]                                                                                                                                            
backend-1       |     For further information visit https://errors.pydantic.dev/2.12/v/string_type
backend-1       | INFO:     172.20.0.6:52724 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error                                            
backend-1       | ERROR:    Exception in ASGI application                                                                                        
backend-1       | Traceback (most recent call last):                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi               
backend-1       |     result = await app(  # type: ignore[func-returns-value]                                                                    
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__                     
backend-1       |     return await self.app(scope, receive, send)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1135, in __call__
backend-1       |     await super().__call__(scope, receive, send)                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 107, in __call__                              
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__                         
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__                         
backend-1       |     await self.app(scope, receive, _send)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 191, in __call__                           
backend-1       |     with recv_stream, send_stream, collapse_excgroups():
backend-1       |   File "/usr/local/lib/python3.11/contextlib.py", line 158, in __exit__                                                        
backend-1       |     self.gen.throw(typ, value, traceback)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_utils.py", line 85, in collapse_excgroups                           
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 193, in __call__
backend-1       |     response = await self.dispatch_func(request, call_next)                                                                    
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/app/app/main.py", line 50, in telegram_header_middleware                                                              
backend-1       |     response = await call_next(request)                                                                                        
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 168, in call_next                          
backend-1       |     raise app_exc from app_exc.__cause__ or app_exc.__context__                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 144, in coro                               
backend-1       |     await self.app(scope, receive_or_disconnect, send_no_error)                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/cors.py", line 85, in __call__
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 63, in __call__                      
backend-1       |     await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__                    
backend-1       |     await self.app(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 716, in __call__                                   
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 736, in app                                        
backend-1       |     await route.handle(scope, receive, send)                                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 290, in handle
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 118, in app                                          
backend-1       |     await wrap_app_handling_exceptions(app, request)(scope, receive, send)                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 104, in app
backend-1       |     response = await f(request)                                                                                                
backend-1       |                ^^^^^^^^^^^^^^^^                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 428, in app                                          
backend-1       |     raw_response = await run_endpoint_function(                                                                                
backend-1       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 316, in run_endpoint_function                        
backend-1       |     return await run_in_threadpool(dependant.call, **values)                                                                   
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool                       
backend-1       |     return await anyio.to_thread.run_sync(func)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/to_thread.py", line 61, in run_sync                                      
backend-1       |     return await get_async_backend().run_sync_in_worker_thread(                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 2525, in run_sync_in_worker_thread          
backend-1       |     return await future                                                                                                        
backend-1       |            ^^^^^^^^^^^^                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 986, in run                                 
backend-1       |     result = context.run(func, *args)                                                                                          
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                          
backend-1       |   File "/app/app/routers/users.py", line 29, in get_me                                                                         
backend-1       |     return _serialize_user(user)                                                                                               
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^                                                                                               
backend-1       |   File "/app/app/routers/users.py", line 17, in _serialize_user
backend-1       |     data = UserOut.model_validate(user)                                                                                        
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/pydantic/main.py", line 716, in model_validate                                 
backend-1       |     return cls.__pydantic_validator__.validate_python(
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                         
backend-1       | pydantic_core._pydantic_core.ValidationError: 1 validation error for UserOut                                                   
backend-1       | roles.0                                                                                                                        
backend-1       |   Input should be a valid string [type=string_type, input_value=<app.models.UserRole object at 0x7c15dab4f8d0>, input_type=UserRole]                                                                                                                                            
backend-1       |     For further information visit https://errors.pydantic.dev/2.12/v/string_type
backend-1       | INFO:     172.20.0.2:46450 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error                                            
backend-1       | ERROR:    Exception in ASGI application
backend-1       | Traceback (most recent call last):                                                                                             
frontend-1      | 172.20.0.1 - - [19/Dec/2025:17:18:55 +0000] "GET /api/users/me HTTP/1.1" 500 21 "https://1aa7038ac739.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi
backend-1       |     result = await app(  # type: ignore[func-returns-value]
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                    
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__                     
backend-1       |     return await self.app(scope, receive, send)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1135, in __call__                               
backend-1       |     await super().__call__(scope, receive, send)                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 107, in __call__                              
backend-1       |     await self.middleware_stack(scope, receive, send)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__                         
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__                         
backend-1       |     await self.app(scope, receive, _send)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 191, in __call__
backend-1       |     with recv_stream, send_stream, collapse_excgroups():                                                                       
backend-1       |   File "/usr/local/lib/python3.11/contextlib.py", line 158, in __exit__                                                        
backend-1       |     self.gen.throw(typ, value, traceback)                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_utils.py", line 85, in collapse_excgroups
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 193, in __call__                           
backend-1       |     response = await self.dispatch_func(request, call_next)                                                                    
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/app/app/main.py", line 50, in telegram_header_middleware                                                              
backend-1       |     response = await call_next(request)                                                                                        
backend-1       |                ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 168, in call_next
backend-1       |     raise app_exc from app_exc.__cause__ or app_exc.__context__                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/base.py", line 144, in coro                               
backend-1       |     await self.app(scope, receive_or_disconnect, send_no_error)                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/cors.py", line 85, in __call__
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 63, in __call__                      
backend-1       |     await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
backend-1       |     raise exc                                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 716, in __call__                                   
backend-1       |     await self.middleware_stack(scope, receive, send)                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 736, in app
backend-1       |     await route.handle(scope, receive, send)                                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 290, in handle                                     
backend-1       |     await self.app(scope, receive, send)                                                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 118, in app
backend-1       |     await wrap_app_handling_exceptions(app, request)(scope, receive, send)                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app                      
backend-1       |     raise exc
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app                      
backend-1       |     await app(scope, receive, sender)                                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 104, in app                                          
backend-1       |     response = await f(request)
backend-1       |                ^^^^^^^^^^^^^^^^                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 428, in app                                          
backend-1       |     raw_response = await run_endpoint_function(
backend-1       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/fastapi/routing.py", line 316, in run_endpoint_function                        
backend-1       |     return await run_in_threadpool(dependant.call, **values)
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool                       
backend-1       |     return await anyio.to_thread.run_sync(func)                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/to_thread.py", line 61, in run_sync                                      
backend-1       |     return await get_async_backend().run_sync_in_worker_thread(                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 2525, in run_sync_in_worker_thread          
backend-1       |     return await future                                                                                                        
backend-1       |            ^^^^^^^^^^^^                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/anyio/_backends/_asyncio.py", line 986, in run                                 
backend-1       |     result = context.run(func, *args)
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^                                                                                          
backend-1       |   File "/app/app/routers/users.py", line 29, in get_me                                                                         
backend-1       |     return _serialize_user(user)                                                                                               
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/app/app/routers/users.py", line 17, in _serialize_user                                                                
backend-1       |     data = UserOut.model_validate(user)                                                                                        
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/pydantic/main.py", line 716, in model_validate
backend-1       |     return cls.__pydantic_validator__.validate_python(                                                                         
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                         
backend-1       | pydantic_core._pydantic_core.ValidationError: 1 validation error for UserOut                                                   
backend-1       | roles.0                                                                                                                        
backend-1       |   Input should be a valid string [type=string_type, input_value=<app.models.UserRole object at 0x7c15dab52590>, input_type=UserRole]                                                                                                                                            
backend-1       |     For further information visit https://errors.pydantic.dev/2.12/v/string_type
backend-1       | INFO:     172.20.0.2:46462 - "GET /api/categories HTTP/1.1" 200 OK                                                             
frontend-1      | 172.20.0.1 - - [19/Dec/2025:17:18:55 +0000] "GET /api/categories HTTP/1.1" 200 608 "https://1aa7038ac739.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"       
Gracefully stopping... (press Ctrl+C again to force)
[+] Stopping 5/5
 ✔ Container coursework-event-tracker-pgadmin-1       Stopped                                                                               5.0s 
 ✔ Container coursework-event-tracker-telegram-bot-1  Stopped                                                                               2.2s 
 ✔ Container coursework-event-tracker-frontend-1      Stopped                                                                               1.8s 
 ✔ Container coursework-event-tracker-backend-1       Stopped                                                                               1.6s 
 ✔ Container coursework-event-tracker-db-1            Stopped                                                                               0.5s 
canceled
PS C:\workplace\BD_2025\cp\event-tracker\coursework-event-tracker> 
