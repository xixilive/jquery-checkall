/*
  jquery-checkall
  https://github.com/xixilive/jquery-checkall

  Copyright (c) 2013 xixilive
  Licensed under the MIT license.
*/

(function($) {
  var CheckAll;
  CheckAll = function(el, options) {
    this.el = el;
    this.options = $.extend({
      target: ':checkbox',
      reverse: false,
      checked: null,
      sync: true
    }, options);
    $(this.options.target).on('change.checkall', $.proxy(this.checkMaster, this));
    this.el.on('click.checkall', $.proxy(this.clickMaster, this));
    if (this.options.sync && (this.el.is(':checkbox') || this.el.is(':radio'))) {
      this.checkAll(this.el.is(':checked'));
    }
    return this;
  };
  CheckAll.prototype = {
    clickMaster: function() {
      var _ref;
      if (this.options.reverse) {
        return this.checkReverse();
      } else {
        return this.checkAll((_ref = this.options.checked) != null ? _ref : this.el.is(':checked'));
      }
    },
    checkAll: function(chk) {
      return $(this.options.target).prop('checked', chk).trigger('change.checkall');
    },
    checkReverse: function() {
      return $(this.options.target).each(function() {
        return $(this).prop('checked', !$(this).is(':checked')).trigger('change.checkall');
      });
    },
    checkMaster: function() {
      var a, b;
      if (this.options.sync) {
        a = $(this.options.target + ':checked').length;
        b = $(this.options.target).length;
        return this.el.prop('checked', a > 0 && a === b);
      }
    }
  };
  $.fn.checkAll = function(options) {
    if (options == null) {
      options = {};
    }
    return this.each(function() {
      var data, self;
      self = $(this);
      data = self.data('checkall');
      if (!data) {
        options = $.extend(self.data(), options);
        self.data('checkall', (data = new CheckAll(self, options)));
      }
      return self;
    });
  };
  $(function() {
    return $("[data-toggle=checkall][data-target]").checkAll();
  });
  return null;
})(jQuery);
