import React from "react"
import {Table} from "antd"

import {dataSource, columns} from "../../data/results.json"

export const ResultsTable = () => {

    return (<div>
    <Table dataSource={dataSource} columns={columns} />
    </div>)
}