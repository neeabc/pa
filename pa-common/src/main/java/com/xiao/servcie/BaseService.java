package com.xiao.servcie;

import com.github.pagehelper.PageInfo;

import java.util.List;

public interface BaseService<T,I> {
    List<T> findAll();
    PageInfo<T> findPage(int pageNum, int pageSize);
    int add(T entity);
    T findOne(I id);
    int update(T entity);
    int delete(List<I> ids);
    PageInfo<T> search(Integer page, Integer rows, T entity);
}
