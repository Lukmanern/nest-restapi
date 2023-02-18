/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbBackupsService {
  create() {
    const Docker = require('dockerode');
    const tar = require('tar-fs');
    const fs = require('fs');

    const docker = new Docker();

    const containerName = 'mongodb';
    const backupDir = '/xxxxxx';

    const container = docker.getContainer(containerName);

    container.inspect((err: any, data: { Mounts: any[] }) => {
      if (err) throw err;

      const containerDataDir = data.Mounts.find(
        (mount: { Destination: string }) => mount.Destination === '/data/db',
      ).Source;

      const backupStream = tar.pack(containerDataDir);

      const backupFile = fs.createWriteStream(`${backupDir}/backup.tar`);

      backupStream.pipe(backupFile);

      backupFile.on('finish', () => {
        console.log('Backup created successfully');
      });
    });

    return {
      message: 'success',
    };
  }
}

/*
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const shell = require('shelljs');
    const time = Date.now();
    shell.cd('C:/Users/Lenovo/OneDrive/Documents/Dev NestJS/simple-test-case/');
    return shell.exec(
      'docker exec -T mongodb mongodump --uri="mongodb://localhost/nest" --out="xxx/xxx"',
    );
    //     shell.exec(
    //       `winpty docker exec -it mongodb mongodump --uri="mongodb://localhost/nest" --out="xxx/${time}"`,
    //     );
    //     shell.exec('echo ll');

    return {
      statusCode: 201,
      message: 'Backup Created At : dump/' + time,
      status: 'Created',
    };
*/
