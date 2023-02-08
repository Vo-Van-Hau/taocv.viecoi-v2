import { useState } from 'react';
import { 
    AppstoreAddOutlined, FormOutlined, BlockOutlined, FontColorsOutlined,
    ShareAltOutlined, DownloadOutlined 
} from '@ant-design/icons';
import { Divider, Menu } from 'antd';

const Toolbox = () => {
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
                        key: 2,
                        icon: <FormOutlined />,
                    },
                    {
                        label: 'Rearrange Sections',
                        key: 1,
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
        </div>
    )
}

export default Toolbox;