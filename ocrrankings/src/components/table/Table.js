import React from "react"
import {Table} from "antd"

import {dataSource} from "../../data/results.json"
import {columns} from "../../data/columns"

export const ResultsTable = () => {

    return (<div>
    <Table dataSource={dataSource} columns={columns} />
    </div>)
}