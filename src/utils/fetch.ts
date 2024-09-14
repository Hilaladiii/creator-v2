interface fetchApiOption<T> {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: T;
  tag?: string;
}

export async function fetchApi<T>({
  path,
  method,
  data,
  tag,
}: fetchApiOption<T>) {
  const option: RequestInit = {
    method,
    mode: "no-cors",
  };
  if (data) {
    if (data instanceof FormData) {
      option.body = data;
    } else {
      option.body = JSON.stringify(data);
    }
  }
  if (tag) {
    option.next = {
      tags: [tag],
    };
  }
  const res = await fetch(`http://127.0.0.1:3000/api/${path}`, option);
  return await res.json();
}
