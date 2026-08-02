import {
  LuPhone,
  LuMapPin,
  LuClock,
  LuMail,
  LuStar,
  LuArrowRight,
  LuMenu,
  LuX,
  LuWrench,
  LuShieldCheck,
  LuQuote,
  LuCheck,
  LuGauge,
  LuDisc,
  LuCog,
  LuCarFront,
  LuCalendarCheck2,
  LuDollarSign,
  LuCalendar,
  LuBadgeCheck,
} from 'react-icons/lu'

const registry = {
  phone: LuPhone,
  'map-pin': LuMapPin,
  clock: LuClock,
  mail: LuMail,
  star: LuStar,
  arrow: LuArrowRight,
  menu: LuMenu,
  x: LuX,
  wrench: LuWrench,
  shield: LuShieldCheck,
  quote: LuQuote,
  check: LuCheck,
  gauge: LuGauge,
  disc: LuDisc,
  cog: LuCog,
  'car-front': LuCarFront,
  'calendar-check': LuCalendarCheck2,
  'dollar-sign': LuDollarSign,
  calendar: LuCalendar,
  'badge-check': LuBadgeCheck,
}

export function Icon({ name, className }) {
  const Cmp = registry[name]
  if (!Cmp) return null
  return <Cmp className={className} aria-hidden="true" />
}
