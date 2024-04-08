import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Lab5_ph42693 = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.content}>Trong thời đại hiện nay, với mức sống ngày càng được cải thiện và nâng cao kéo theo đó là nhu cầu về tinh thần cũng như vật chất ngày càng được đòi hỏi cao hơn về chất lượng. Đặc biệt đó chính là nhu cầu giải trí của con người chúng ta. Ở các nước phương Tây, việc đến rạp phim đã trở nên quá quen thuộc từ hàng thế kỉ với người dân ở đó, riêng đối với những nước kém phát triển hơn trong đó có Việt Nam thì việc tiếp xúc với công nghệ giải trí này chỉ mới phát triển nhiều thập kỷ trở lại đây.
          Bởi vậy, qua một thời gian nghiên cứu, phát triển và thử nghiệm ứng dụng thực tế, phạm vi và mục tiêu của dự án, cách thức thực hiện, các tính năng chính của ứng dụng và kết quả đạt được. Chúng tôi cũng xin gửi lời cảm ơn đến nhà trường, thầy Lê Hồng Duy cùng các bạn đã đồng hành và hỗ trợ chúng tôi trong suốt quá trình thực hiện dự án này.
        </Text>

        <Text style={[styles.content, { color: 'gray' }]}>Trong thời đại hiện nay, với mức sống ngày càng được cải thiện và nâng cao kéo theo đó là nhu cầu về tinh thần cũng như vật chất ngày càng được đòi hỏi cao hơn về chất lượng. Đặc biệt đó chính là nhu cầu giải trí của con người chúng ta. Ở các nước phương Tây, việc đến rạp phim đã trở nên quá quen thuộc từ hàng thế kỉ với người dân ở đó, riêng đối với những nước kém phát triển hơn trong đó có Việt Nam thì việc tiếp xúc với công nghệ giải trí này chỉ mới phát triển nhiều thập kỷ trở lại đây.
          Bởi vậy, qua một thời gian nghiên cứu, phát triển và thử nghiệm ứng dụng thực tế, phạm vi và mục tiêu của dự án, cách thức thực hiện, các tính năng chính của ứng dụng và kết quả đạt được. Chúng tôi cũng xin gửi lời cảm ơn đến nhà trường, thầy Lê Hồng Duy cùng các bạn đã đồng hành và hỗ trợ chúng tôi trong suốt quá trình thực hiện dự án này.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Lab5_ph42693

const styles = StyleSheet.create({
  content: {
    fontFamily: 'Browood',
    color: 'black',
    fontSize: 22
  }
})
