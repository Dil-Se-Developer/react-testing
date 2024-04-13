import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    new HttpResponse("record found", {
      status: 200,
    });
    return HttpResponse.json([
      {
        name: "Bruce Wayne",
      },
      {
        name: "Clark Kent",
      },
      {
        name: "Princess Diana",
      },
    ]);
  }),
];
