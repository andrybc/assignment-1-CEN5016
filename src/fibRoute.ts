// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";


interface FibRequestParams {
  num: string;
}

//Parameter 'req' implicitly has an 'any' type; Imported request and response types from Express.
export default (req: Request<FibRequestParams>, res: Response): void => {
  const { num } = req.params;

  const x: number = parseInt(num, 10)
  const fibN: number = fibonacci(x);
  let result = `fibonacci(${x}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${x}) is undefined`;
  }

  res.send(result);
};
