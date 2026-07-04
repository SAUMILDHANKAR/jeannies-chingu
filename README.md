### Project Description

- This is a monorepo application showcasing potential security features.
- Application homepage default is a sign in page, with options to sign-in and sign-up using email and password as well as using third-party like Google authorization with accounts of your choosing.
- Two ways to authenticate using third-party API verification and credentials stored in a supabase table.
- (Optional) Add encryption before sending credentials to the database table.
- Successful login yields access to a page with folders and applications.
- Shortcuts for applications like facebook, linkedin etc. use same credentials as well as metadata as close as possible to the users data, except the real data is substituted by ChatGPt data.
- Application with clock icon opens another sign in page which is the actual application with user's real data.

### Instructions to build the application locally

- To install the dependencies in your local bash terminal, first type:
```pnpm install```
and then hit enter.
- To run the application locally, first type:
``` pnpm run dev```
and then hit enter.