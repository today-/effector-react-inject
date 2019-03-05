import * as React from 'react';
import { Store, createStoreObject } from 'effector';
import { createStoreConsumer } from 'effector-react';

type GetInnerType<S> = S extends Store<infer T> ? T : never;

export type Injected<Stores, K extends keyof Stores = keyof Stores> = Partial<{
    [key in K]: GetInnerType<Stores[key]>;
}>;

export function inject<Props, States extends any, K extends string>(
    stores: {[key in K]: Store<States[key]>},
) {
    const merged = createStoreObject(stores);
    const Consumer = createStoreConsumer(merged);

    return (
        Cmp: React.ComponentType<Props>,
    ) => (props: Props & {[key in K]: typeof stores[key]}) => (
        <Consumer>
            {state => <Cmp {...props} {...state} />}
        </Consumer>
    );
}
