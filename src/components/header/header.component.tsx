import {Appbar} from 'react-native-paper'

function HeaderComponent({title}:HeaderComponentParams) {
    return (
        <Appbar>
        <Appbar.BackAction />
        <Appbar.Content title={title} />
      </Appbar>
    )
}

interface HeaderComponentParams{
    title: string
}

export default HeaderComponent
