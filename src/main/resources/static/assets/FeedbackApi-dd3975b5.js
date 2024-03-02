import {R as t, H as d} from "./useRequest-4cb19bee.js";

const c = {
    getById: e => new t(d.GET, `/feedback/${e}`),
    getListByUserId: e => new t(d.GET, `/feedback/user-id/${e}`),
    getListByIds: e => new t(d.GET, `/feedback/list/${e}`),
    getList: e => new t(d.GET, "/feedback/list", e),
    getPage: e => new t(d.GET, "/feedback/page", e),
    create: e => new t(d.POST, "/feedback", e),
    modifyById: (e, a) => new t(d.PUT, `/feedback/${e}`, a),
    deleteById: e => new t(d.DELETE, `/feedback/${e}`)
};
export {c as F};
