import "express"

declare module "express" {
    interface Request {
        time?: number
    }
}