import * as express from 'express';

import { Controller, Get, Post, Put, Delete } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { IPlatformObject, PlatformObject } from '../../PlatformAPI/class/platform.object';
import { IUser, UserService } from '../service/user';
import { IObjectStore } from '../../PlatformAPI/object.store';
import { Request } from 'express';
import TYPES from '../constant/types';

@injectable()
@Controller('/api/object')
export class PlatformObjectController {

    constructor(@inject(TYPES.PlatformObjectStorage) private _platformObjectStorage: IObjectStore<PlatformObject>) {
    }

    @Get('/')
    public getPlatformObjects(req: express.Request, res: express.Response) {
        return this._platformObjectStorage.readAll()
            .then((data) => res.json(data))
            .catch((err) => res.status(400).json({message: err}));
    }   

    @Get('/:id')
    public getPlatformObject(req: express.Request, res: express.Response) {
        return this._platformObjectStorage.read(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json({message: err}));
    }

    @Post('/')
    private async create(req: express.Request, res: express.Response) {
        try {
            await this._platformObjectStorage.create(req.body);
            res.sendStatus(201);
        } catch (err) {
            res.status(400).json({message: err});
        }
    }

    @Put('/:id')
    private async update(req: express.Request, res: express.Response) {
        try {
            await this._platformObjectStorage.update(req.body);
            res.sendStatus(200);
        } catch (err) {
            res.status(400).json({message: err});
        }
    }

    @Delete('/:id')
    private async delete(req: express.Request, res: express.Response) {
        try {
            await this._platformObjectStorage.delete(<PlatformObject>{_id: req.params.id})
            res.sendStatus(200);
        } catch (err) {
            res.status(400).json({message: err});
        }
    }

}