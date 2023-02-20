/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbBackupsService {
  create() {
    const shell = require('shelljs');
    const file =
      'C:/Users/Lenovo/OneDrive/Documents/Dev NestJS/simple-test-case/backup/' +
      Date.now();
    const uri = 'mongodb://127.0.0.1:27017/nest';
    shell.exec('mongodump --uri="' + uri + '" --out="' + file + '"');

    const conn = this.__createConnectionToMySQL();
    const queryInsert = `
      INSERT INTO backup_logs (file)
      VALUES (?);
      `;

    conn.query(queryInsert, [file], function (err: any) {
      if (err) throw err;
      console.log('1 record inserted');
    });
    return {
      status: 'created',
      message: 'Success Created new DB Backup',
    };
  }

  __createConnectionToMySQL(): any {
    const mysql = require('mysql');

    const con = mysql.createConnection({
      port: 3306,
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'backup_database',
    });

    con.connect((err: any) => {
      if (err) {
        console.log('Database Connection Failed !!!', err);
      } else {
        console.log('connected to Database');
      }
    });

    return con;
  }
}

/*
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    
    shell.cd('C:/Users/Lenovo/OneDrive/Documents/Dev NestJS/simple-test-case/');
    return shell.exec(
      'docker exec -T mongodb mongodump --uri="mongodb://127.0.0.1:27017/nest" --out="xxx/xxx"',
    );
    //     shell.exec(
    //       `winpty docker exec -it mongodb mongodump --uri="mongodb://127.0.0.1:27017/nest" --out="xxx/${time}"`,
    //     );
    //     shell.exec('echo ll');

    return {
      statusCode: 201,
      message: 'Backup Created At : dump/' + time,
      status: 'Created',
    };
*/
