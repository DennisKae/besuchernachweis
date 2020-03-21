import * as http from 'http';
import Router from 'next/router';

export default function redirectTo(
  destination: string,
  status: number,
  res?: http.ServerResponse,
  as?: string
) {
  if (res) {
    res.writeHead(status || 302, { Location: destination });
    res.end();
  } else {
    Router.push(destination, as);
  }
}
