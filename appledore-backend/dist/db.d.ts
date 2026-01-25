import { Schema, Types } from "mongoose";
export declare const userModel: import("mongoose").Model<{
    username: string;
    password: string;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    username: string;
    password: string;
}, import("mongoose").Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        username: string;
        password: string;
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        username: string;
        password: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const contentModel: import("mongoose").Model<{
    type: "link" | "X" | "videos" | "document" | "blog";
    title: string;
    link: string;
    userId: Types.ObjectId;
    tags: Types.ObjectId[];
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    type: "link" | "X" | "videos" | "document" | "blog";
    title: string;
    link: string;
    userId: Types.ObjectId;
    tags: Types.ObjectId[];
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    type: "link" | "X" | "videos" | "document" | "blog";
    title: string;
    link: string;
    userId: Types.ObjectId;
    tags: Types.ObjectId[];
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    type: "link" | "X" | "videos" | "document" | "blog";
    title: string;
    link: string;
    userId: Types.ObjectId;
    tags: Types.ObjectId[];
}, import("mongoose").Document<unknown, {}, {
    type: "link" | "X" | "videos" | "document" | "blog";
    title: string;
    link: string;
    userId: Types.ObjectId;
    tags: Types.ObjectId[];
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    type: "link" | "X" | "videos" | "document" | "blog";
    title: string;
    link: string;
    userId: Types.ObjectId;
    tags: Types.ObjectId[];
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        type: "link" | "X" | "videos" | "document" | "blog";
        title: string;
        link: string;
        userId: Types.ObjectId;
        tags: Types.ObjectId[];
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        type: "link" | "X" | "videos" | "document" | "blog";
        title: string;
        link: string;
        userId: Types.ObjectId;
        tags: Types.ObjectId[];
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "link" | "X" | "videos" | "document" | "blog";
    title: string;
    link: string;
    userId: Types.ObjectId;
    tags: Types.ObjectId[];
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "link" | "X" | "videos" | "document" | "blog";
    title: string;
    link: string;
    userId: Types.ObjectId;
    tags: Types.ObjectId[];
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const tagModel: import("mongoose").Model<{
    title: string;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    title: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    title: string;
}, import("mongoose").Document<unknown, {}, {
    title: string;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        title: string;
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        title: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const linkModel: import("mongoose").Model<{
    userId: Types.ObjectId;
    hash: string;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    userId: Types.ObjectId;
    hash: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    userId: Types.ObjectId;
    hash: string;
}, import("mongoose").Document<unknown, {}, {
    userId: Types.ObjectId;
    hash: string;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        userId: Types.ObjectId;
        hash: string;
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        userId: Types.ObjectId;
        hash: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map