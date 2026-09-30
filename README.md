# Library dashboard and borrowing demo

The original course dashboard explores static book and account fixtures. The new My loans page searches the catalog and saves borrowing/return history through a validated SQLite-backed API. The course data is not modified.

## Run the full-stack demo

Requires Node.js 24 or newer.

```bash
npm install
npm run start:api
```

Open http://localhost:4000. Run `npm run test:api` to check the backend workflow.
Run `npm test` for the original dashboard tests.

## Implementation and scope

- `server/index.cjs` defines API routes and validation.
- `server/http.cjs` provides the HTTP server, bounded JSON parsing, static-file protection, session cookies, and parameterized SQLite storage.
- `.data/` contains the local database and is ignored by Git.

The server binds to loopback. Session cookies separate browser data; they are not user accounts or cross-device login. These are local portfolio demos. Static hosting cannot run the Node API. Production deployment would require account authentication, abuse controls, and deployment configuration. No payment processing or email delivery is implemented.

## Learning context

[Mustafa Sarwari](https://github.com/mustafa-sarwari) — junior full-stack developer building practical frontend and backend skills.
This extends an existing course project; original fixtures, exercises, and test attribution are preserved.
