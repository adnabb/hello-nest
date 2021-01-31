import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): any {
    super.catch(exception, host)

    // const cxt = host.switchToHttp()
    // const response = cxt.getResponse()
    // const request = cxt.getRequest()
    //
    // const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
    //
    // response
    //   .status(status)
    //   .json({
    //     statusCode: status,
    //     timastamp: new Date().toISOString(),
    //     path: request.url
    //   })
  }
}