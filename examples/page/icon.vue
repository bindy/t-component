<template>
  <div>
    <h3>图标大小</h3>
    <t-icon name="location" :size="10" />
    <t-icon name="location" :size="30" />

    <h3>图标颜色</h3>
    <t-icon name="location" color="red" />
    <t-icon name="location" color="blue" />

    <h3>图标集合</h3>
    <div class="icon-layout">
      <t-row justify="center" align="center">
        <t-col align="center" :span="6">
          <t-icon name="arrow-left" :size="30" />
          <p>arrow-left</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="arrow-right" :size="30" />
          <p>arrow-right</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="arrow-up" :size="30" />
          <p>arrow-up</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="arrow-down" :size="30" />
          <p>arrow-down</p>
        </t-col>
      </t-row>
      <t-row>
        <t-col align="center" :span="6">
          <t-icon name="location" :size="30" />
          <p>location</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="location-o" :size="30" />
          <p>location-o</p>
        </t-col>

        <t-col align="center" :span="6">
          <t-icon name="star" :size="30" />
          <p>star</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="star-o" :size="30" />
          <p>star-o</p>
        </t-col>
      </t-row>
      <t-row>
        <t-col align="center" :span="6">
          <t-icon name="phone" :size="30" />
          <p>phone</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="phone-o" :size="30" />
          <p>phone-o</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="setting" :size="30" />
          <p>setting</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="setting-o" :size="30" />
          <p>setting-o</p>
        </t-col>
      </t-row>
      <t-row>
        <t-col align="center" :span="6">
          <t-icon name="cart" :size="30" />
          <p>cart</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="comment" :size="30" />
          <p>comment</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="service" :size="30" />
          <p>service</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="bag" :size="30" />
          <p>bag</p>
        </t-col>
      </t-row>
      <t-row>
        <t-col align="center" :span="6">
          <t-icon name="close" :size="30" />
          <p>close</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="close-o" :size="30" />
          <p>close-o</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="clock" :size="30" />
          <p>clock</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="question" :size="30" />
          <p>question</p>
        </t-col>
      </t-row>
      <t-row>
        <t-col align="center" :span="6">
          <t-icon name="success" :size="30" />
          <p>success</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="success-o" :size="30" />
          <p>success-o</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="add" :size="30" />
          <p>add</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="add-o" :size="30" />
          <p>add-o</p>
        </t-col>
      </t-row>
      <t-row>
        <t-col align="center" :span="6">
          <t-icon name="info" :size="30" />
          <p>info</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="warning" :size="30" />
          <p>warning</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="warning-o" :size="30" />
          <p>warning-o</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="more" :size="30" />
          <p>more</p>
        </t-col>
      </t-row>
      <t-row>
        <t-col align="center" :span="6">
          <t-icon name="shop" :size="30" />
          <p>shop</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="share" :size="30" />
          <p>share</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="cart" :size="30" />
          <p>cart</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="home" :size="30" />
          <p>home</p>
        </t-col>
      </t-row>
      <t-row>
        <t-col align="center" :span="6">
          <t-icon name="user" :size="30" />
          <p>user</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="delete" :size="30" />
          <p>delete</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="edit" :size="30" />
          <p>edit</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="search" :size="30" />
          <p>search</p>
        </t-col>
      </t-row>
      <t-row>
        <t-col align="center" :span="6">
          <t-icon name="video-play" :size="30" />
          <p>video-play</p>
        </t-col>
        <t-col align="center" :span="6">
          <t-icon name="video-pause" :size="30" />
          <p>video-pause</p>
        </t-col>
        
      </t-row>
    </div>
  </div>
</template>
<style>
</style>
