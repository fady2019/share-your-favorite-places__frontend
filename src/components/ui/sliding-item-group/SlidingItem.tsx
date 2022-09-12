import React, { useRef } from 'react';

import {
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonText,
} from '@ionic/react';
import { caretBack } from 'ionicons/icons';

import classes from './SlidingItem.module.css';

const SlidingItem: React.FC<any> = (props) => {
    const itemSlidingRef = useRef<any>(null);

    const { item } = props;

    const hasOptions: boolean = item.options && item.options?.length > 0;

    const clickOptionHandler = (onClick: any) => {
        itemSlidingRef.current?.close();

        if (onClick) {
            onClick();
        }
    };

    const clickItemHandler = () => {
        itemSlidingRef.current?.open();
    };

    return (
        <IonItemSliding ref={itemSlidingRef} slot="icon-only">
            {hasOptions && (
                <IonItemOptions>
                    {item.options.map((option: any) => {
                        return (
                            <IonItemOption
                                key={option.id}
                                color={option.color ?? 'warning'}
                                onClick={clickOptionHandler.bind(null, option.onClick)}
                            >
                                <IonIcon
                                    className={classes['dra-sliding-item-group__option-icon']}
                                    icon={option.icon}
                                />
                            </IonItemOption>
                        );
                    })}
                </IonItemOptions>
            )}
            <IonItem
                button
                detailIcon={hasOptions? caretBack : undefined}
                onClick={clickItemHandler}
            >
                <IonIcon icon={item.icon} slot="start" size="small" />
                <IonLabel>
                    <h2>{item.label.value}</h2>
                    <IonText className={classes['dra-sliding-item-group__item-property']}>
                        {item.label.property}
                    </IonText>
                </IonLabel>
            </IonItem>
        </IonItemSliding>
    );
};

export default SlidingItem;
