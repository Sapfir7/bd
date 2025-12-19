PS C:\workplace\BD_2025\cp\event-tracker\coursework-event-tracker> docker-compose up --build   
time="2025-12-19T19:34:08+03:00" level=warning msg="C:\\workplace\\BD_2025\\cp\\event-tracker\\coursework-event-tracker\\docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion"
[+] Building 5.2s (20/20) FINISHED                                                                                        docker:desktop-linux
 => [backend internal] load build definition from Dockerfile                                                                              0.0s
 => => transferring dockerfile: 274B                                                                                                      0.0s 
 => [telegram-bot internal] load metadata for docker.io/library/python:3.11-slim                                                          4.1s 
 => [backend auth] library/python:pull token for registry-1.docker.io                                                                     0.0s
 => [backend internal] load .dockerignore                                                                                                 0.0s
 => => transferring context: 2B                                                                                                           0.0s 
 => [telegram-bot 1/5] FROM docker.io/library/python:3.11-slim@sha256:158caf0e080e2cd74ef2879ed3c4e697792ee65251c8208b7afb56683c32ea6c    0.1s 
 => => resolve docker.io/library/python:3.11-slim@sha256:158caf0e080e2cd74ef2879ed3c4e697792ee65251c8208b7afb56683c32ea6c                 0.0s 
 => [backend internal] load build context                                                                                                 0.0s 
 => => transferring context: 8.39kB                                                                                                       0.0s 
 => CACHED [telegram-bot 2/5] WORKDIR /app                                                                                                0.0s 
 => CACHED [backend 3/5] COPY requirements.txt ./                                                                                         0.0s 
 => CACHED [backend 4/5] RUN pip install --no-cache-dir -r requirements.txt                                                               0.0s 
 => [backend 5/5] COPY app ./app                                                                                                          0.0s 
 => [backend] exporting to image                                                                                                          0.2s
 => => exporting layers                                                                                                                   0.0s 
 => => exporting manifest sha256:7e285d4030e3658fd26b32a8d709cce1236a7031baa9d22516d2ffd087628955                                         0.0s 
 => => exporting config sha256:4d09259f4115eec8e411ba0ae05f357a9bb8b6c1de6dbc05471af4e9c68700db                                           0.0s 
 => => exporting attestation manifest sha256:a0baf72f955f97fefc8e28288b74be298b5c3946d4801b2c9e90210189d819c7                             0.0s 
 => => exporting manifest list sha256:eae279e70764043d12bb5cbaaafecb80dafc3233aefc24282eab00f5f67ef12f                                    0.0s 
 => => naming to docker.io/library/coursework-event-tracker-backend:latest                                                                0.0s 
 => => unpacking to docker.io/library/coursework-event-tracker-backend:latest                                                             0.1s 
 => [backend] resolving provenance for metadata file                                                                                      0.0s
 => [telegram-bot internal] load build definition from Dockerfile                                                                         0.0s 
 => => transferring dockerfile: 212B                                                                                                      0.0s 
 => [telegram-bot internal] load .dockerignore                                                                                            0.0s 
 => => transferring context: 2B                                                                                                           0.0s 
 => [telegram-bot internal] load build context                                                                                            0.0s 
 => => transferring context: 227B                                                                                                         0.0s 
 => CACHED [telegram-bot 3/5] COPY requirements.txt requirements.txt                                                                      0.0s 
 => CACHED [telegram-bot 4/5] RUN pip install --no-cache-dir -r requirements.txt                                                          0.0s 
 => CACHED [telegram-bot 5/5] COPY . .                                                                                                    0.0s 
 => [telegram-bot] exporting to image                                                                                                     0.1s 
 => => exporting layers                                                                                                                   0.0s 
 => => exporting manifest sha256:656e4fadd4a7cf9c4dc48c1e9eec04921d34a170eeb9cc33d1c6278849d64d49                                         0.0s 
 => => exporting config sha256:79994bab5320141d6d0dc1621c21032966be5d76f0a11b1d102a1d8d8e295761                                           0.0s 
 => => exporting attestation manifest sha256:a8fe00c73f00c790db6303607474dbf95593596ffbbf1343d1b3fca4ec98076c                             0.0s 
 => => exporting manifest list sha256:6d98cc859a45179e227158b8908b77aeb9b4c9694dfed1035f6bc823c81ec7fb                                    0.0s 
 => => naming to docker.io/library/coursework-event-tracker-telegram-bot:latest                                                           0.0s 
 => => unpacking to docker.io/library/coursework-event-tracker-telegram-bot:latest                                                        0.0s 
 => [telegram-bot] resolving provenance for metadata file                                                                                 0.0s 
[+] Running 8/8
 ✔ backend                                            Built                                                                               0.0s 
 ✔ telegram-bot                                       Built                                                                               0.0s 
 ✔ Network coursework-event-tracker_default           Created                                                                             0.2s 
 ✔ Container coursework-event-tracker-db-1            Created                                                                             0.1s 
 ✔ Container coursework-event-tracker-frontend-1      Created                                                                             0.1s 
 ✔ Container coursework-event-tracker-backend-1       Created                                                                             0.2s 
 ✔ Container coursework-event-tracker-pgadmin-1       Created                                                                             0.2s 
 ✔ Container coursework-event-tracker-telegram-bot-1  Created                                                                             0.3s 
Attaching to backend-1, db-1, frontend-1, pgadmin-1, telegram-bot-1
frontend-1      | /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
frontend-1      | /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
frontend-1      | /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh                                        
frontend-1      | 10-listen-on-ipv6-by-default.sh: info: can not modify /etc/nginx/conf.d/default.conf (read-only file system?)                
frontend-1      | /docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
frontend-1      | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
frontend-1      | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh                                            
frontend-1      | /docker-entrypoint.sh: Configuration complete; ready for start up                                                            
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: using the "epoll" event method
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: nginx/1.29.4
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: built by gcc 15.2.0 (Alpine 15.2.0)                                                        
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: OS: Linux 6.6.87.2-microsoft-standard-WSL2
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576                                                  
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: start worker processes
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: start worker process 21
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: start worker process 22                                                                    
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: start worker process 23                                                                    
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: start worker process 24
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: start worker process 25                                                                    
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: start worker process 26
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: start worker process 27                                                                    
frontend-1      | 2025/12/19 16:34:17 [notice] 1#1: start worker process 28
db-1            | 
db-1            | PostgreSQL Database directory appears to contain a database; Skipping initialization
db-1            | 
pgadmin-1       | email config is {'CHECK_EMAIL_DELIVERABILITY': False, 'ALLOW_SPECIAL_EMAIL_DOMAINS': [], 'GLOBALLY_DELIVERABLE': True}       
db-1            | 2025-12-19 16:34:17.633 UTC [1] LOG:  starting PostgreSQL 15.15 (Debian 15.15-1.pgdg13+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
db-1            | 2025-12-19 16:34:17.634 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
db-1            | 2025-12-19 16:34:17.634 UTC [1] LOG:  listening on IPv6 address "::", port 5432                                              
db-1            | 2025-12-19 16:34:17.637 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
db-1            | 2025-12-19 16:34:17.650 UTC [29] LOG:  database system was shut down at 2025-12-19 16:24:17 UTC                              
db-1            | 2025-12-19 16:34:17.699 UTC [1] LOG:  database system is ready to accept connections                                         
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
backend-1       | /usr/local/lib/python3.11/site-packages/pydantic/_internal/_config.py:383: UserWarning: Valid config keys have changed in V2:
backend-1       | * 'orm_mode' has been renamed to 'from_attributes'
backend-1       |   warnings.warn(message, UserWarning)                                                                                        
backend-1       | INFO:     Started server process [1]
backend-1       | INFO:     Waiting for application startup.
backend-1       | INFO:     Application startup complete.                                                                                      
backend-1       | INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
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
pgadmin-1       | [2025-12-19 16:34:44 +0000] [1] [INFO] Starting gunicorn 23.0.0
pgadmin-1       | [2025-12-19 16:34:44 +0000] [1] [INFO] Listening at: http://[::]:80 (1)
pgadmin-1       | [2025-12-19 16:34:44 +0000] [1] [INFO] Using worker: gthread                                                                 
pgadmin-1       | [2025-12-19 16:34:44 +0000] [124] [INFO] Booting worker with pid: 124                                                        
pgadmin-1       | /venv/lib/python3.14/site-packages/sshtunnel.py:1040: SyntaxWarning: 'return' in a 'finally' block                           
pgadmin-1       |   return (ssh_host,
backend-1       | INFO:     172.20.0.6:52124 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error                                          
backend-1       | ERROR:    Exception in ASGI application
backend-1       | Traceback (most recent call last):
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi             
backend-1       |     result = await app(  # type: ignore[func-returns-value]
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                  
db-1            | 2025-12-19 16:36:14.918 UTC [37] ERROR:  duplicate key value violates unique constraint "users_telegram_id_key"              
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__                   
db-1            | 2025-12-19 16:36:14.918 UTC [37] DETAIL:  Key (telegram_id)=(705415199) already exists.                                      
backend-1       |     return await self.app(scope, receive, send)
db-1            | 2025-12-19 16:36:14.918 UTC [37] STATEMENT:  INSERT INTO users (telegram_id, username, password_hash, created_at, is_active) VALUES ('705415199', 's4pfir', 'telegram', '2025-12-19T16:36:14.917412'::timestamp, true) RETURNING users.id                                   
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
backend-1       |   File "/app/app/routers/users.py", line 24, in get_me                                                                       
backend-1       |     user.roles = [r.role.role_name for r in user.roles]                                                                      
backend-1       |     ^^^^^^^^^^                                                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 540, in __set__
backend-1       |     self.impl.set(                                                                                                           
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1995, in set                             
backend-1       |     collections.bulk_replace(                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 811, in bulk_replace
backend-1       |     appender(member, _sa_initiator=initiator)
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1138, in append
backend-1       |     item = __set(self, item, _sa_initiator, NO_KEY)                                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1103, in __set
backend-1       |     item = executor.fire_append_event(item, _sa_initiator, key=key)                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                          
telegram-bot-1  | INFO:aiogram.event:Update id=946816194 is handled. Duration 435 ms by bot id=8531294438
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 695, in fire_append_event               
backend-1       |     return self.attr.fire_append_event(
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1762, in fire_append_event               
backend-1       |     value = fn(state, value, initiator or self._append_token, key=key)                                                       
backend-1       |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 63, in append                            
backend-1       |     item_state = attributes.instance_state(item)                                                                             
backend-1       |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       | AttributeError: 'str' object has no attribute '_sa_instance_state'                                                           
backend-1       | INFO:     172.20.0.6:52140 - "POST /api/users HTTP/1.1" 500 Internal Server Error                                            
backend-1       | ERROR:    Exception in ASGI application                                                                                      
backend-1       | Traceback (most recent call last):
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context               
backend-1       |     self.dialect.do_execute(                                                                                                 
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/default.py", line 952, in do_execute                       
backend-1       |     cursor.execute(statement, parameters)
backend-1       | psycopg2.errors.UniqueViolation: duplicate key value violates unique constraint "users_telegram_id_key"                      
backend-1       | DETAIL:  Key (telegram_id)=(705415199) already exists.                                                                       
backend-1       | 
backend-1       |                                                                                                                              
backend-1       | The above exception was the direct cause of the following exception:                                                         
backend-1       | 
backend-1       | Traceback (most recent call last):                                                                                           
backend-1       |   File "/app/app/routers/users.py", line 33, in create_user
backend-1       |     db.commit()                                                                                                              
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 2030, in commit
backend-1       |     trans.commit(_to_root=True)                                                                                              
backend-1       |   File "<string>", line 2, in commit                                                                                         
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/state_changes.py", line 137, in _go
backend-1       |     ret_value = fn(self, *arg, **kw)                                                                                         
backend-1       |                 ^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 1311, in commit                             
backend-1       |     self._prepare_impl()                                                                                                     
backend-1       |   File "<string>", line 2, in _prepare_impl                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/state_changes.py", line 137, in _go                           
backend-1       |     ret_value = fn(self, *arg, **kw)                                                                                         
backend-1       |                 ^^^^^^^^^^^^^^^^^^^^                                                                                         
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 1286, in _prepare_impl                      
backend-1       |     self.session.flush()
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 4331, in flush                              
backend-1       |     self._flush(objects)                                                                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 4466, in _flush                             
backend-1       |     with util.safe_reraise():                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/util/langhelpers.py", line 224, in __exit__                       
backend-1       |     raise exc_value.with_traceback(exc_tb)                                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 4427, in _flush                             
backend-1       |     flush_context.execute()
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 466, in execute                          
backend-1       |     rec.execute(self)                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 642, in execute
backend-1       |     util.preloaded.orm_persistence.save_obj(                                                                                 
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/persistence.py", line 93, in save_obj                         
backend-1       |     _emit_insert_statements(                                                                                                 
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/persistence.py", line 1233, in _emit_insert_statements
backend-1       |     result = connection.execute(                                                                                             
backend-1       |              ^^^^^^^^^^^^^^^^^^^                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1419, in execute                            
backend-1       |     return meth(
backend-1       |            ^^^^^                                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/sql/elements.py", line 527, in _execute_on_connection             
backend-1       |     return connection._execute_clauseelement(                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1641, in _execute_clauseelement             
backend-1       |     ret = self._execute_context(                                                                                             
backend-1       |           ^^^^^^^^^^^^^^^^^^^^^^                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context                   
backend-1       |     return self._exec_single_context(
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context               
backend-1       |     self._handle_dbapi_exception(                                                                                            
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 2363, in _handle_dbapi_exception            
backend-1       |     raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context               
backend-1       |     self.dialect.do_execute(                                                                                                 
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/default.py", line 952, in do_execute                       
backend-1       |     cursor.execute(statement, parameters)                                                                                    
backend-1       | sqlalchemy.exc.IntegrityError: (psycopg2.errors.UniqueViolation) duplicate key value violates unique constraint "users_telegram_id_key"
backend-1       | DETAIL:  Key (telegram_id)=(705415199) already exists.
backend-1       |                                                                                                                              
backend-1       | [SQL: INSERT INTO users (telegram_id, username, password_hash, created_at, is_active) VALUES (%(telegram_id)s, %(username)s, %(password_hash)s, %(created_at)s, %(is_active)s) RETURNING users.id]                                                                          
backend-1       | [parameters: {'telegram_id': '705415199', 'username': 's4pfir', 'password_hash': 'telegram', 'created_at': datetime.datetime(2025, 12, 19, 16, 36, 14, 917412), 'is_active': True}]                                                                                         
backend-1       | (Background on this error at: https://sqlalche.me/e/20/gkpj)
backend-1       | 
backend-1       | The above exception was the direct cause of the following exception:                                                         
backend-1       |                                                                                                                              
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
backend-1       |   File "/app/app/routers/users.py", line 38, in create_user                                                                  
backend-1       |     existing.roles = [r.role.role_name for r in existing.roles]                                                              
backend-1       |     ^^^^^^^^^^^^^^                                                                                                           
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 540, in __set__                          
backend-1       |     self.impl.set(
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1995, in set                             
backend-1       |     collections.bulk_replace(                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 811, in bulk_replace                    
backend-1       |     appender(member, _sa_initiator=initiator)                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1138, in append
backend-1       |     item = __set(self, item, _sa_initiator, NO_KEY)                                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1103, in __set                          
backend-1       |     item = executor.fire_append_event(item, _sa_initiator, key=key)                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 695, in fire_append_event               
backend-1       |     return self.attr.fire_append_event(                                                                                      
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1762, in fire_append_event               
backend-1       |     value = fn(state, value, initiator or self._append_token, key=key)
backend-1       |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 63, in append                            
backend-1       |     item_state = attributes.instance_state(item)                                                                             
backend-1       |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                             
backend-1       | AttributeError: 'str' object has no attribute '_sa_instance_state'
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:36:21 +0000] "GET / HTTP/1.1" 200 7309 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:36:21 +0000] "GET /app.js HTTP/1.1" 200 19409 "https://342a708a5343.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"
backend-1       | INFO:     172.20.0.3:54154 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:36:23 +0000] "GET /api/users/me HTTP/1.1" 500 21 "https://342a708a5343.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"      
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
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:36:23 +0000] "GET /favicon.ico HTTP/1.1" 200 7309 "https://342a708a5343.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"     
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
backend-1       |   File "/app/app/routers/users.py", line 24, in get_me                                                                       
backend-1       |     user.roles = [r.role.role_name for r in user.roles]
backend-1       |     ^^^^^^^^^^                                                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 540, in __set__                          
backend-1       |     self.impl.set(                                                                                                           
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1995, in set
backend-1       |     collections.bulk_replace(                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 811, in bulk_replace                    
backend-1       |     appender(member, _sa_initiator=initiator)                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1138, in append
backend-1       |     item = __set(self, item, _sa_initiator, NO_KEY)                                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1103, in __set                          
backend-1       |     item = executor.fire_append_event(item, _sa_initiator, key=key)                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 695, in fire_append_event               
backend-1       |     return self.attr.fire_append_event(                                                                                      
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1762, in fire_append_event
backend-1       |     value = fn(state, value, initiator or self._append_token, key=key)                                                       
backend-1       |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 63, in append                            
backend-1       |     item_state = attributes.instance_state(item)                                                                             
backend-1       |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       | AttributeError: 'str' object has no attribute '_sa_instance_state'                                                           
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:36:23 +0000] "GET /api/categories HTTP/1.1" 200 608 "https://342a708a5343.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"   
backend-1       | INFO:     172.20.0.3:54166 - "GET /api/categories HTTP/1.1" 200 OK
backend-1       | INFO:     172.20.0.6:33510 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error
backend-1       | ERROR:    Exception in ASGI application
backend-1       | Traceback (most recent call last):                                                                                           
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 409, in run_asgi             
backend-1       |     result = await app(  # type: ignore[func-returns-value]                                                                  
db-1            | 2025-12-19 16:36:35.586 UTC [33] ERROR:  duplicate key value violates unique constraint "users_telegram_id_key"              
backend-1       |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                  
db-1            | 2025-12-19 16:36:35.586 UTC [33] DETAIL:  Key (telegram_id)=(705415199) already exists.
backend-1       |   File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__                   
db-1            | 2025-12-19 16:36:35.586 UTC [33] STATEMENT:  INSERT INTO users (telegram_id, username, password_hash, created_at, is_active) VALUES ('705415199', 's4pfir', 'telegram', '2025-12-19T16:36:35.585971'::timestamp, true) RETURNING users.id
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
telegram-bot-1  | INFO:aiogram.event:Update id=946816195 is handled. Duration 230 ms by bot id=8531294438                                      
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
backend-1       |   File "/app/app/routers/users.py", line 24, in get_me                                                                       
backend-1       |     user.roles = [r.role.role_name for r in user.roles]                                                                      
backend-1       |     ^^^^^^^^^^                                                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 540, in __set__                          
backend-1       |     self.impl.set(
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1995, in set                             
backend-1       |     collections.bulk_replace(                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 811, in bulk_replace                    
backend-1       |     appender(member, _sa_initiator=initiator)                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1138, in append
backend-1       |     item = __set(self, item, _sa_initiator, NO_KEY)                                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1103, in __set                          
backend-1       |     item = executor.fire_append_event(item, _sa_initiator, key=key)                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 695, in fire_append_event               
backend-1       |     return self.attr.fire_append_event(                                                                                      
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1762, in fire_append_event
backend-1       |     value = fn(state, value, initiator or self._append_token, key=key)                                                       
backend-1       |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 63, in append                            
backend-1       |     item_state = attributes.instance_state(item)                                                                             
backend-1       |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                             
backend-1       | AttributeError: 'str' object has no attribute '_sa_instance_state'
backend-1       | INFO:     172.20.0.6:33526 - "POST /api/users HTTP/1.1" 500 Internal Server Error                                            
backend-1       | ERROR:    Exception in ASGI application                                                                                      
backend-1       | Traceback (most recent call last):                                                                                           
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context               
backend-1       |     self.dialect.do_execute(
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/default.py", line 952, in do_execute                       
backend-1       |     cursor.execute(statement, parameters)                                                                                    
backend-1       | psycopg2.errors.UniqueViolation: duplicate key value violates unique constraint "users_telegram_id_key"                      
backend-1       | DETAIL:  Key (telegram_id)=(705415199) already exists.                                                                       
backend-1       | 
backend-1       |                                                                                                                              
backend-1       | The above exception was the direct cause of the following exception:                                                         
backend-1       |                                                                                                                              
backend-1       | Traceback (most recent call last):                                                                                           
backend-1       |   File "/app/app/routers/users.py", line 33, in create_user
backend-1       |     db.commit()                                                                                                              
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 2030, in commit                             
backend-1       |     trans.commit(_to_root=True)                                                                                              
backend-1       |   File "<string>", line 2, in commit                                                                                         
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/state_changes.py", line 137, in _go
backend-1       |     ret_value = fn(self, *arg, **kw)                                                                                         
backend-1       |                 ^^^^^^^^^^^^^^^^^^^^                                                                                         
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 1311, in commit                             
backend-1       |     self._prepare_impl()                                                                                                     
backend-1       |   File "<string>", line 2, in _prepare_impl
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/state_changes.py", line 137, in _go                           
backend-1       |     ret_value = fn(self, *arg, **kw)                                                                                         
backend-1       |                 ^^^^^^^^^^^^^^^^^^^^                                                                                         
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 1286, in _prepare_impl                      
backend-1       |     self.session.flush()
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 4331, in flush                              
backend-1       |     self._flush(objects)                                                                                                     
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 4466, in _flush                             
backend-1       |     with util.safe_reraise():                                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/util/langhelpers.py", line 224, in __exit__
backend-1       |     raise exc_value.with_traceback(exc_tb)                                                                                   
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/session.py", line 4427, in _flush                             
backend-1       |     flush_context.execute()                                                                                                  
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 466, in execute
backend-1       |     rec.execute(self)                                                                                                        
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 642, in execute                          
backend-1       |     util.preloaded.orm_persistence.save_obj(                                                                                 
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/persistence.py", line 93, in save_obj                         
backend-1       |     _emit_insert_statements(
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/persistence.py", line 1233, in _emit_insert_statements        
backend-1       |     result = connection.execute(                                                                                             
backend-1       |              ^^^^^^^^^^^^^^^^^^^                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1419, in execute                            
backend-1       |     return meth(
backend-1       |            ^^^^^                                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/sql/elements.py", line 527, in _execute_on_connection             
backend-1       |     return connection._execute_clauseelement(                                                                                
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1641, in _execute_clauseelement
backend-1       |     ret = self._execute_context(                                                                                             
backend-1       |           ^^^^^^^^^^^^^^^^^^^^^^                                                                                             
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context                   
backend-1       |     return self._exec_single_context(                                                                                        
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context               
backend-1       |     self._handle_dbapi_exception(                                                                                            
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 2363, in _handle_dbapi_exception            
backend-1       |     raise sqlalchemy_exception.with_traceback(exc_info[2]) from e                                                            
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
backend-1       |     self.dialect.do_execute(                                                                                                 
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/engine/default.py", line 952, in do_execute                       
backend-1       |     cursor.execute(statement, parameters)                                                                                    
backend-1       | sqlalchemy.exc.IntegrityError: (psycopg2.errors.UniqueViolation) duplicate key value violates unique constraint "users_telegram_id_key"                                                                                                                                     
backend-1       | DETAIL:  Key (telegram_id)=(705415199) already exists.
backend-1       |                                                                                                                              
backend-1       | [SQL: INSERT INTO users (telegram_id, username, password_hash, created_at, is_active) VALUES (%(telegram_id)s, %(username)s, %(password_hash)s, %(created_at)s, %(is_active)s) RETURNING users.id]                                                                          
backend-1       | [parameters: {'telegram_id': '705415199', 'username': 's4pfir', 'password_hash': 'telegram', 'created_at': datetime.datetime(2025, 12, 19, 16, 36, 35, 585971), 'is_active': True}]                                                                                         
backend-1       | (Background on this error at: https://sqlalche.me/e/20/gkpj)
backend-1       |                                                                                                                              
backend-1       | The above exception was the direct cause of the following exception:
backend-1       |                                                                                                                              
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
backend-1       |   File "/app/app/routers/users.py", line 38, in create_user
backend-1       |     existing.roles = [r.role.role_name for r in existing.roles]                                                              
backend-1       |     ^^^^^^^^^^^^^^                                                                                                           
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 540, in __set__                          
backend-1       |     self.impl.set(                                                                                                           
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1995, in set                             
backend-1       |     collections.bulk_replace(
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 811, in bulk_replace                    
backend-1       |     appender(member, _sa_initiator=initiator)                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1138, in append                         
backend-1       |     item = __set(self, item, _sa_initiator, NO_KEY)
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1103, in __set                          
backend-1       |     item = executor.fire_append_event(item, _sa_initiator, key=key)                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 695, in fire_append_event
backend-1       |     return self.attr.fire_append_event(                                                                                      
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1762, in fire_append_event               
backend-1       |     value = fn(state, value, initiator or self._append_token, key=key)                                                       
backend-1       |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 63, in append                            
backend-1       |     item_state = attributes.instance_state(item)                                                                             
backend-1       |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                             
backend-1       | AttributeError: 'str' object has no attribute '_sa_instance_state'                                                           
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:37:00 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:37:01 +0000] "GET /app.js HTTP/1.1" 304 0 "https://342a708a5343.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"
backend-1       | INFO:     172.20.0.3:38330 - "GET /api/users/me HTTP/1.1" 500 Internal Server Error
backend-1       | ERROR:    Exception in ASGI application
backend-1       | Traceback (most recent call last):                                                                                           
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:37:01 +0000] "GET /api/users/me HTTP/1.1" 500 21 "https://342a708a5343.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"      
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
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:37:01 +0000] "GET /favicon.ico HTTP/1.1" 304 0 "https://342a708a5343.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"        
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
frontend-1      | 172.20.0.1 - - [19/Dec/2025:16:37:01 +0000] "GET /api/categories HTTP/1.1" 200 608 "https://342a708a5343.ngrok-free.app/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" "213.159.79.81"   
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
backend-1       |   File "/app/app/routers/users.py", line 24, in get_me                                                                       
backend-1       |     user.roles = [r.role.role_name for r in user.roles]
backend-1       |     ^^^^^^^^^^                                                                                                               
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 540, in __set__                          
backend-1       |     self.impl.set(                                                                                                           
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1995, in set                             
backend-1       |     collections.bulk_replace(
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 811, in bulk_replace                    
backend-1       |     appender(member, _sa_initiator=initiator)                                                                                
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1138, in append                         
backend-1       |     item = __set(self, item, _sa_initiator, NO_KEY)                                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 1103, in __set                          
backend-1       |     item = executor.fire_append_event(item, _sa_initiator, key=key)                                                          
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                          
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/collections.py", line 695, in fire_append_event               
backend-1       |     return self.attr.fire_append_event(
backend-1       |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                                      
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/attributes.py", line 1762, in fire_append_event               
backend-1       |     value = fn(state, value, initiator or self._append_token, key=key)                                                       
backend-1       |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                       
backend-1       |   File "/usr/local/lib/python3.11/site-packages/sqlalchemy/orm/unitofwork.py", line 63, in append
backend-1       |     item_state = attributes.instance_state(item)                                                                             
backend-1       |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                             
backend-1       | AttributeError: 'str' object has no attribute '_sa_instance_state'                                                           
backend-1       | INFO:     172.20.0.3:38346 - "GET /api/categories HTTP/1.1" 200 OK                                                           
telegram-bot-1  | ERROR:aiogram.dispatcher:Failed to fetch updates - TelegramNetworkError: HTTP Client says - ServerDisconnectedError: Server disconnected
telegram-bot-1  | WARNING:aiogram.dispatcher:Sleep for 1.000000 seconds and try again... (tryings = 0, bot id = 8531294438)
Gracefully stopping... (press Ctrl+C again to force)                                                                                           
[+] Stopping 5/5
 ✔ Container coursework-event-tracker-frontend-1      Stopped                                                                             0.5s 
 ✔ Container coursework-event-tracker-pgadmin-1       Stopped                                                                             3.2s 
 ✔ Container coursework-event-tracker-telegram-bot-1  Stopped                                                                             1.0s 
 ✔ Container coursework-event-tracker-backend-1       Stopped                                                                             0.8s 
 ✔ Container coursework-event-tracker-db-1            Stopped                                                                             0.3s 
canceled
PS C:\workplace\BD_2025\cp\event-tracker\coursework-event-tracker> 
