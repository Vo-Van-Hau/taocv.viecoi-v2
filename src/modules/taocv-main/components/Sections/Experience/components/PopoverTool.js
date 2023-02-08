import { 
    PlusOutlined, CaretUpOutlined, CaretDownOutlined, DeleteOutlined, FontSizeOutlined,
    CalendarOutlined, SettingOutlined
} from '@ant-design/icons';
import { Button, Space } from 'antd';

const PopoverTool = (props) => {

    const { moveableItem, moveableItems, setMoveableItems, moveableItemObject } = props;

    /**
     * @author: <it-team@wacontre.com>
     * @todo
     * @param
     * @return {void}
     */
    const handleAddNewEntry = () => {
        let newMoveableItems = [...moveableItems];
        newMoveableItems.push(moveableItemObject);
        setMoveableItems(newMoveableItems);
    }

    /**
     * @author: <it-team@wacontre.com>
     * @todo
     * @param
     * @return {void}
     */
    const handleDeleteEntry = () => {
        if(moveableItems.length <= 1) return;
        let newMoveableItems = [...moveableItems];
        newMoveableItems.splice(moveableItem.index, 1);
        setMoveableItems(newMoveableItems);
    }

    return (
        <div>
            <div>
                <div>
                    <Space.Compact block>
                        <Button icon={<PlusOutlined />} onClick={() => handleAddNewEntry()}>New Entry</Button>
                        <Button icon={<CaretUpOutlined />} />
                        <Button icon={<CaretDownOutlined />} />
                        <Button icon={<DeleteOutlined />} onClick={() => handleDeleteEntry()}/>
                        <Button icon={<FontSizeOutlined />} />
                        <Button icon={<CalendarOutlined />} />
                        <Button icon={<SettingOutlined />} />
                    </Space.Compact>
                </div>
            </div>
        </div>
    )
}

export default PopoverTool;