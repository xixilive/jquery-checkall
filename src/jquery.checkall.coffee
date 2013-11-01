###
  jquery-checkall
  https://github.com/xixilive/jquery-checkall

  Copyright (c) 2013 xixilive
  Licensed under the MIT license.
###
( ($) -> 
  CheckAll = (el, options) ->
    @el = el
    @options = $.extend(target: ':checkbox', reverse: false, checked: null, sync: true, options)
    $(@options.target).on 'change.checkall', $.proxy(@checkMaster, this)
    @el.on 'click.checkall', $.proxy(@clickMaster, this)
    if @options.sync && (@el.is(':checkbox') || @el.is(':radio'))
      @checkAll(@el.is(':checked'))
    this

  CheckAll.prototype = 
    clickMaster: ->
      if @options.reverse
        @checkReverse()
      else
        @checkAll(@options.checked ? @el.is(':checked'))

    checkAll: (chk) ->
      $(@options.target).prop('checked', chk).trigger('change.checkall')

    checkReverse: ->
      $(@options.target).each ->
        $(this).prop('checked', !$(this).is(':checked')).trigger('change.checkall')

    checkMaster: ->
      if @options.sync
        a = $(@options.target + ':checked').length
        b = $(@options.target).length
        @el.prop('checked', a > 0 && a == b)

  $.fn.checkAll = (options = {}) ->
    @each ->
      self = $(this)
      data = self.data('checkall')
      if !data
        options = $.extend(self.data(), options);
        self.data('checkall', (data = new CheckAll(self, options)))
      self

  $ -> 
    $("[data-toggle=checkall][data-target]").checkAll();

  null
) jQuery
