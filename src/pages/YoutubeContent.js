import React, { useState } from 'react'

import {List, Card, Button } from 'antd'

export default function YoutubeContent(props) {
  const [state, setState] = useState(true)
  const search = props.search

  return (
    <div>
      <Button type="danger" onClick={() => setState(!state)}>Change view</Button>

      {state && search ? (
        <List
          bordered
          dataSource={search}
          renderItem={(items, i) => (
            <List.Item>
              <div key={i}>
                <div className="youtube ">
                  <div className="video-item">
                    <iframe
                      width="120"
                      height="90"
                      src={items}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;   picture-in-picture"
                      allowFullScreen
                    ></iframe>{' '}
                  </div>
                </div>{' '}
              </div>
            </List.Item>
          )}
        />
      ) : (
        search.map((item, i) => (
          <Card className="card" key={i} style={{ width: 770, height: 270 }}>
            <div>
              <iframe
                width=" 600"
                height="200"
                src={item}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;   picture-in-picture"
                allowFullScreen
              ></iframe>{' '}
            </div>
          </Card>
        ))
      )}
    </div>
  )
}
