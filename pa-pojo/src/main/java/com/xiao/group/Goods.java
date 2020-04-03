package com.xiao.group;

import com.xiao.pojo.TbGoods;
import com.xiao.pojo.TbGoodsDesc;
import com.xiao.pojo.TbItem;

import java.io.Serializable;
import java.util.List;

public class Goods implements Serializable {

    private static final long serialVersionUID = 3410500516077720461L;
    private TbGoods goods;//商品SPU
    private TbGoodsDesc goodsDesc;//商品扩展
    private List<TbItem> itemList;//商品SKU列表

    public TbGoods getGoods() {
        return goods;
    }

    public void setGoods(TbGoods goods) {
        this.goods = goods;
    }

    public TbGoodsDesc getGoodsDesc() {
        return goodsDesc;
    }

    public void setGoodsDesc(TbGoodsDesc goodsDesc) {
        this.goodsDesc = goodsDesc;
    }

    public List<TbItem> getItemList() {
        return itemList;
    }

    public void setItemList(List<TbItem> itemList) {
        this.itemList = itemList;
    }
}
