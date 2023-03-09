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
        try {
            let newMoveableItems = [...moveableItems];
            newMoveableItems.push(moveableItemObject);
            setMoveableItems(newMoveableItems);
        } catch (errors) {
            console.log(errors);
        }
    }

    /**
     * @author: <it-team@wacontre.com>
     * @todo
     * @param
     * @return {void}
     */
    const handleDeleteEntry = () => {
        try {
            if(moveableItems.length <= 1) return;
            let newMoveableItems = [...moveableItems];
            newMoveableItems.splice(moveableItem.index, 1);
            setMoveableItems(newMoveableItems);
        } catch (errors) {
            console.log(errors);
        }
    }

    /**
     * @author: <it-team@wacontre.com>
     * @todo
     * @param
     * @return {void}
     */
    const handleMoveEntry = (type, payload) => {
        try {
            let newMoveableItems = [...moveableItems];
            let fromIndex = moveableItem.index;
            let toIndex = 0;
            let mutable = true;
            switch(type) {
                case 'MOVEUP':
                    if(fromIndex === 0) mutable = false;
                    toIndex = fromIndex - 1;
                    break;
                case 'MOVEDOWN':
                    if(fromIndex >= (moveableItems.length - 1)) mutable = false;
                    toIndex = fromIndex + 1;
                    break;
                default: return;
            }
            newMoveableItems.splice(fromIndex, 1);
            newMoveableItems.splice(toIndex, 0, moveableItem);
            if(mutable) {
                setMoveableItems(newMoveableItems);
            }
        } catch (errors) {
            console.log(errors);
        }
    }

    return (
        <div>
            <div>
                <div>
                    <Space.Compact block>
                        <Button icon={<PlusOutlined />} onClick={() => handleAddNewEntry()}>New Entry</Button>
                        <Button icon={<CaretUpOutlined />} onClick={() => handleMoveEntry('MOVEUP', {

                        })}/>
                        <Button icon={<CaretDownOutlined />} onClick={() => handleMoveEntry('MOVEDOWN', {
                                
                        })}/>
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