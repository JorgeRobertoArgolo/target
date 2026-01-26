import { HomeHeader } from "@/components/HomeHeader";
import { View } from "react-native";
import { Target } from "@/components/Target";
import { List } from "@/components/List";

const summary = {
    total: 'R$ 2.680,00',
    input: { label: 'Entradas', value: 'R$ 6,184.90' },
    output: { label: 'Saídas', value: '-R$ 883.65' },
}

const targets = [
    {
        id: '1',
        name: 'Apple Watch',
        percentage: '50%',
        current: 'R$ 580,00',
        target: 'R$ 1.790,00'
    },
    {
        id: '2',
        name: 'Comparar uma cadeira ergonômica',
        percentage: '75%',
        current: 'R$ 900,00',
        target: 'R$ 1.200,00'
    },
    {
        id: '3',
        name: 'Fazer uma viagem para o Rio de Janeiro',
        percentage: '75%',
        current: 'R$ 1.200,00',
        target: 'R$ 3.000,00'
    }
]

export default function Index () {
    return (
        <View style={{flex: 1}}>
           <HomeHeader data={summary}/>
           <Target
                data={targets[0]}
           />
           <List 
                title="Metas"
                data={[]} 
                renderItem={({ item }) => <Target data={item} />} 
                keyExtractor={(item) => item.id}
                emptyMessage="Nenhuma meta. Toque em nova meta para criar."
                containerStyle={{ paddingHorizontal: 24 }}
            />
        </View>
    );
}