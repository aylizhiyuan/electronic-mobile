import { Image, View } from '@tarojs/components'
import React from 'react'
import noReservationImage from '@/assets/images/empty1.png'
import styles from './index.scss'

interface IProps {
  text: string
}

const EmptyPage = (props: IProps) => (
  <View className={styles.emptyPage}>
    <Image src={noReservationImage} className={styles.emptyPageImg} />
    {props.text}
  </View>
)

export default EmptyPage
