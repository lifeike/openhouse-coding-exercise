import React, { useState, useEffect, memo } from 'react'
import defaultPicture from '../../../assets/defaultPicture.jpg'
import { Card, Row, Col } from 'react-bootstrap'
import { sortCommunities, getPricesList, isErrorImgHandler } from './functions'
import { Spin } from 'antd';
import { getCommunities, getHomes } from '../../../api/community'
import './index.css'

export default memo(function Community() {
  const [communities, setCommunities] = useState<coverimgArray>([] as coverimgArray)
  const [priceList, setPriceList] = useState<priceListobject>({} as priceListobject)
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    setLoading(true);
    //get communities
    (async function () {
      let communities:coverimgArray = await getCommunities();
      let result:coverimgArray = communities && communities.sort(sortCommunities('name'))
      result  = await isErrorImgHandler(result) as coverimgArray
      setCommunities(result)
      setLoading(false);
    })()
  }, [])

  useEffect(() => {
    //get average price of each community 
    (async function () {
      let homes:HomeList = await getHomes();
      homes && setPriceList(getPricesList(homes))
    })()
  }, [])

  return (
    <div className='container'>
      {loading?
      <div className='loading'>
        <Spin tip="Loading..."/>
      </div>
      :<Row xs={1} md={3} className="g-4">
        {communities?communities.map(community => (
          <Col key={community.id}>
            <Card>
              <div className='cardimg' style={{backgroundImage:`url(${community.imgUrl || defaultPicture})`}}></div>
              <Card.Body>
                <Card.Title>
                  Average price: {priceList[community.id] 
                    ? ` $ ${Number(priceList[community.id]).toFixed(2)}`
                    : ' Not Available'}
                </Card.Title>
                <Card.Text>{community.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )):''}
      </Row>}
      
    </div>
  )
})
