(function(){dust.register("tabs",body_0);function body_0(chk,ctx){return chk.section(ctx.get("sections"),ctx,{"block":body_1},null).write("<ul>").section(ctx.get("sections"),ctx,{"block":body_5},null);}function body_1(chk,ctx){return chk.helper("if",ctx,{"else":body_2,"block":body_3},{"cond":body_4});}function body_2(chk,ctx){return chk.write("<input type=\"radio\" name=\"pcss3t\" checked id=\"tab").reference(ctx.get("$idx"),ctx,"h").write("\" class=\"tab-content-last\"><label for=\"tab").reference(ctx.get("$idx"),ctx,"h").write("\"><i class=\"icon-bolt iconbig\"></i>").reference(ctx.get("name"),ctx,"h").write("View</label>");}function body_3(chk,ctx){return chk.write(" <input type=\"radio\" name=\"pcss3t\" checked id=\"tab").reference(ctx.get("$idx"),ctx,"h").write("\" class=\"tab-content-").reference(ctx.get("$idx"),ctx,"h").write("\"><label for=\"tab").reference(ctx.get("$idx"),ctx,"h").write("\"><i class=\"icon-bolt iconbig\"></i>").reference(ctx.get("name"),ctx,"h").write("View</label>");}function body_4(chk,ctx){return chk.reference(ctx.get("$idx"),ctx,"h").write(" < ").reference(ctx.get("numberItems"),ctx,"h");}function body_5(chk,ctx){return chk.helper("if",ctx,{"else":body_6,"block":body_7},{"cond":body_8});}function body_6(chk,ctx){return chk.write("<li class=\"tab-content tab-content-last typography\"><div id=\"").reference(ctx.get("name"),ctx,"h").write("\"></div></li></ul>");}function body_7(chk,ctx){return chk.write("<li class=\"tab-content tab-content-").reference(ctx.get("$idx"),ctx,"h").write(" typography\"><div id=\"").reference(ctx.get("name"),ctx,"h").write("\"></div></li>");}function body_8(chk,ctx){return chk.reference(ctx.get("$idx"),ctx,"h").write(" < ").reference(ctx.get("numberItems"),ctx,"h");}return body_0;})();