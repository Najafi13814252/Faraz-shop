import Search from '@/icons/search.svg'
import Login from '@/icons/login.svg'
import Cart from '@/icons/cart.svg'
import Mobile from '@/icons/category/mobile.svg'
import Laptop from '@/icons/category/laptop.svg'
import Watch from '@/icons/category/watch.svg'
import Tablet from '@/icons/category/tablet.svg'
import Airpod from '@/icons/category/airpod.svg'
import Menu from '@/icons/menu/menu.svg'
import Chat from '@/icons/menu/chat.svg'
import Info from '@/icons/menu/info.svg'
import Discount from '@/icons/menu/discount.svg'
import Fire from '@/icons/menu/fire.svg'
import Wallet from '@/icons/menu/wallet.svg'
import Call from '@/icons/menu/call.svg'
import ArrowDown from '@/icons/arrow/arrow-down.svg'
import ArrowLeft from '@/icons/arrow/arrow-left.svg'
import ArrowLeftFill from '@/icons/arrow/arrow-left-fill.svg'
import ArrowRightBold from '@/icons/arrow/arrow-right-bold.svg'
import ArrowLeftBold from '@/icons/arrow/arrow-left-bold.svg'
import Pay from '@/icons/pay.svg'
import Check from '@/icons/check.svg'

const icons = {
    search: Search,
    login: Login,
    cart: Cart,
    mobile: Mobile,
    laptop: Laptop,
    watch: Watch,
    tablet: Tablet,
    airpod: Airpod,
    menu: Menu,
    chat: Chat,
    info: Info,
    discount: Discount,
    fire: Fire,
    wallet: Wallet,
    call: Call,
    arrow_down: ArrowDown,
    arrow_left: ArrowLeft,
    arrow_left_fill: ArrowLeftFill,
    arrow_right_bold: ArrowRightBold,
    arrow_left_bold: ArrowLeftBold,
    pay: Pay,
    check: Check
}

export type IconName = keyof typeof icons

export default function Icon({ name, size = 24, className }: {
    name: IconName
    size?: number
    className?: string
}) {
    const Component = icons[name]
    return <Component width={size} height={size} className={className} />
}