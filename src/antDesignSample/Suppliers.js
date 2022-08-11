import React, { useEffect, useState } from 'react'
import { baseService } from '../network/services/baseServices'
import { Button, Table,Modal } from 'antd'
const Suppliers = () => {
    const [data,setData] = useState([])
    const [refresh,setRefresh] = useState(true)
    const [isModalVisible,setIsModalVisible] = useState(false)
    const [deleteId,setDeleteId] = useState(0)

  useEffect(() => {
     getData()
  },[refresh])

  const getData = async() => {
  const _data =  await baseService.get("/suppliers")
  setData(_data)
  }
  const columns = [
    {
      title: 'CompanyName',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'ContactName',
      dataIndex: 'contactName',
      key: 'contactName',
    },
    {
      title: 'Country',
      dataIndex: 'address.country',
      key: 'address.country',
    },
    {
        title: 'Delete',
        dataIndex: 'id',
        key: 'id',
        render: id => (<Button type="primary" danger onClick={() => handleClick(id)}>Delete</Button>)
      },
  ];
  const handleClick = (id) => {
   setDeleteId(id)
   setIsModalVisible(true)
  }
  const deleteItem = async(id) => {
   if(id){
    try {
        await baseService.delete(`/suppliers/${id}`)
        setRefresh(prev => !prev)
    } catch (e) {
        console.log("delete error",e);
    }
   }
  }

  const handleOk = () => {
     deleteItem(deleteId)
     setIsModalVisible(false)
  }
  const handleCancel = () => {
   setIsModalVisible(false)
}


  return (
    <div>
        <Table dataSource={data} columns={columns} />;
        <Modal title="Delete Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Are u sure ?...</p>
       
      </Modal>
    </div>
  )
}

export default Suppliers
