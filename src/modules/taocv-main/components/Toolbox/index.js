import { useState, useContext } from 'react';
import { 
    AppstoreAddOutlined, FormOutlined, BlockOutlined, FontColorsOutlined,
    ShareAltOutlined, DownloadOutlined 
} from '@ant-design/icons';
import { Modal, Menu, Col, Divider, Row } from 'antd';

import { CoreContext } from '../Contexts/CoreContext';
import RearrangeSections from './RearrangeSections';

const Toolbox = (props) => {

    const { data, toggleRearrangeSectionsToolBox } = useContext(CoreContext); 

    const handleMenuItemClick = ({ item, key, keyPath, domEvent }) => {
        if(key == 2) {
            toggleRearrangeSectionsToolBox(true);
        }
    }

    return (
        <div className="sticky-left-toolbox">
            <Menu
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={'vertical'}
                theme={'light'}
                items={[
                    {
                        label: 'Add section',
                        key: 1,
                        icon: <FormOutlined />,
                    },
                    {
                        label: 'Rearrange Sections',
                        key: 2,
                        icon: <AppstoreAddOutlined />,
                    },
                    {
                        label: 'Templates',
                        key: 3,
                        icon: <BlockOutlined />,
                    },
                    {
                        label: 'Design & Font',
                        key: 4,
                        icon: <FontColorsOutlined />,
                    }
                ]}
                onClick={({ item, key, keyPath, domEvent }) => handleMenuItemClick({ item, key, keyPath, domEvent })}
            />
            {/* <Divider /> */}
            <Menu
                style={{
                    width: 256,
                }}
                mode={'vertical'}
                theme={'light'}
                items={[
                    {
                        label: 'Share',
                        key: 5,
                        icon: <ShareAltOutlined />,
                    },
                    {
                        label: 'Download',
                        key: 6,
                        icon: <DownloadOutlined />,
                    }
                ]}
            />

            <div>
                <RearrangeSections />
            </div>
        </div>
    )
}

export default Toolbox;