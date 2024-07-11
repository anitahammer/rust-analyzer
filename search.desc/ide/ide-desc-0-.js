searchState.loadedDescShard("ide", 0, "ide crate provides “ide-centric” APIs for the …\nAll assists should be resolved.\nAnalysis is a snapshot of a world state at a moment in …\n<code>AnalysisHost</code> stores the current state of the world.\n&lt;&gt;\n+, -, *, /, +=, -=, *=, /=\nUnique identifier of the assist, should not be shown to …\nA way to control how many assist to resolve during the …\nUsed for associated items.\nUsed with keywords like <code>async</code> and <code>await</code>.\nUsed to differentiate individual elements within attribute …\n|, &amp;, !, ^, |=, &amp;=, ^=\n{}\n[]\nCallable item or value.\nA panic payload indicating that execution of a salsa query …\n:\n,\n, &lt;, ==, &gt;=, &lt;=, !=\n<code>CompletionItem</code> describes a single completion entity which …\nThe type of the completion item.\nConstant operation.\nValue that is being consumed in a function call\nUsed with keywords like <code>if</code> and <code>break</code>.\n<code>CrateGraph</code> is a bit of information which turns a set of …\nUsed for crate names, like <code>serde</code>.\nUsed for items from built-in crates (std, core, alloc, …\n<code>foo</code> in <code>fn foo(x: i32)</code> is a definition, <code>foo</code> in <code>foo(90 + 2)</code> …\nHolds documentation\nDoc-strings like this one.\n.\nContains the error value\nEncapsulate a bunch of raw <code>.set</code> calls on the database.\nHandle to a file in <code>Vfs</code>\nContains the results when hovering over an item\n<code>InsertDelete</code> – a single “atomic” change to text\nHighlighting injection like rust code in doc strings or …\nUsed for intra doc links in doc injection.\nA type to specify UI label, like an entry in the list of …\nUsed for items from other crates.\n<code>(line, column)</code> information in the native, UTF-8 encoding.\nMaps flat <code>TextSize</code> offsets to/from <code>(line, column)</code> …\n&amp;&amp;, ||, !\nUsed to differentiate individual elements within macro …\n! (only for macro calls)\nMutable binding.\n<code>NavigationTarget</code> represents an element in the editor’s …\nNo assists should be resolved.\nContains the success value\nOther punctutations\nOther operators\nWe’re indexing many crates.\n()\nThe query was operating on revision R, but there is a …\nUsed to differentiate individual elements within …\nThe query was blocked on another thread, and that thread …\nUsed for public items.\nInfo associated with a text range.\nImmutable reference.\nGenerally, <code>search_scope</code> returns files that might contain …\nPrimary API to get semantic information, like types, from …\n;\nContains information about an item signature as seen from …\nOnly a certain assist should be resolved.\nHold the <code>AssistId</code> data of a certain assist to resolve. The …\nA user supplied snippet.\nA snippet scope describing where a snippet may apply to. …\nFiles are grouped into source roots. A source root is a …\nUsed for associated items, except Methods. (Some languages …\nA static representation of fully analyzed source code.\nA range in text, represented as a pair of <code>TextSize</code>.\nA measure of text length. Also, equivalently, an index …\nUsed for items in traits and trait impls.\nUsed for unsafe functions, unsafe traits, mutable statics, …\nIn addition to a <code>name</code> field, a <code>NavigationTarget</code> may also …\nGet a flags value with all known bits set.\nReturns a snapshot of the current state, which you can …\nInserts all of the snippets into the given text.\nApplies changes to the current state of the world. If …\nThe id of the assist.\nConvenience function to return assists + quick fixes for …\nSpecifies whether we want to include associated items in …\nCreate a new <code>TextRange</code> with the given <code>offset</code> and <code>len</code> (…\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nComputes call hierarchy candidates for the given file …\nThe macro call site.\nRuns <code>f</code>, and catches any salsa cancellation.\nAdd an offset to this range.\nChecked addition. Returns <code>None</code> if overflow occurred.\nSubtract an offset from this range.\nChecked subtraction. Returns <code>None</code> if overflow occurred.\nZero-based UTF-8 offset.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nComputes completions at the given position.\nCheck if this range contains an offset.\nWhether all set bits in a source flags value are also set …\nCheck if this range contains an offset.\nCheck if this range completely contains another range.\nExtends the range to cover <code>other</code> as well.\nExtends the range to cover <code>other</code> offsets as well.\nReturns the edition of the given crate.\nReturns the root file of the given crate.\nthe crates that we are currently priming.\nthe total number of crates that have finished priming\nReturns crates this file belongs too.\nReturns all crates in the graph, sorted in topological …\nthe total number of crates we want to prime.\nThe macro definition site, if relevant.\nRefers to offsets in the original text\nWhether this item is marked as deprecated\nAdditional info to show in the UI pop up.\nComputes the set of diagnostics for the given file.\nThe intersection of a source flags value with the …\nCreate a zero-length range at the specified offset (…\nGet a flags value with all bits unset.\nBuild an empty search scope.\nWhether native diagnostics are enabled.\nThe end point of this range.\nThis is set in cases like these:\nExtends this crate graph by adding a complete disjoint …\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nSelects the next syntactic nodes encompassing the range.\nReturns URL(s) for the documentation of the symbol under …\nGets the file’s <code>LineIndex</code>: data structure to convert …\nBuild a empty search scope spanning the text range of the …\nReturns a tree representation of symbols in the file. …\nGets the text of the source file.\nBuild a empty search scope spanning the given files.\nFinds all usages of the reference at point.\nFind an AstNode by offset inside SyntaxNode, if it is …\nFind an AstNode by offset inside SyntaxNode, if it is …\nFind an AstNode by offset inside SyntaxNode, if it is …\nA “most interesting” range within the <code>full_range</code>.\nReturns the set of folding ranges.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nCreates a new SourceChange with the given label from the …\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nRange which encompasses the whole element.\nThis is set for items that are function (associated or …\nReturns the declaration from the symbol at <code>position</code>.\nReturns the definitions from the symbol at <code>position</code>.\nReturns the impls from the symbol at <code>position</code>.\nReturns the type definitions for the symbol at <code>position</code>.\nComputes syntax highlighting for the given file\nComputes syntax highlighting for the given file.\nComputes syntax highlighting for the given file range.\nComputes all ranges to highlight for a given item in a …\nReturns a short text describing element at position.\nThe import data to add to completion’s edits. …\nComputes incoming calls for the given file position.\nWhether to inject highlights into doc comments\nReturns a list of the places in the file where type hints …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nInserts a <code>TextEdit</code> and potentially a <code>SnippetEdit</code> for the …\nInserts a <code>TextEdit</code> for the given <code>FileId</code>. This properly …\nThe range covered by both ranges, if it exists. If the …\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGets the underlying snippet index + text range Tabstops …\nWhether all known bits in this flags value are set.\nReturns true if this crate has <code>no_std</code> or <code>no_core</code> specified.\nThis is set for type inference results\nCheck if this range is empty.\nWhether all bits in this flags value are unset.\nThis is set for when trait items are from traits with …\nThis is set when trait items are completed in an impl of …\nSysroot or crates.io library.\nReturns true if this file belongs to an immutable library.\nThis is set in cases like these:\nThis is set when an import is suggested whose name is …\nSet for method completions of the <code>core::ops</code> and <code>core::cmp</code> …\nSet for item completions that are private but in the …\nReturns true when the score for this threshold is above …\nYield a set of contained flags values.\nYield a set of contained named flags values.\nReturns an edit to remove all newlines in the range, …\nWhat item (struct, function, etc) are we completing.\nThe kind of this inlay hint.\nShort description of the assist, as shown in the UI.\nLabel in the completion pop up which identifies completion.\nThe actual label to show in the inlay hint.\nAdditional label details in the completion pop up that are …\nReturns the length of the original text.\nThe size of this range.\nZero-based.\nTransforms the <code>TextSize</code> into a <code>LineCol</code>.\nGiven a range [start, end), returns a sorted iterator of …\nSource location represented by this label part. The client …\nWhat string is used for filtering.\nLookup is used to check if completion item indeed can …\nWhether to highlight the macro call bang\nReturns position of the matching brace (all types of …\nBuild a search scope spanning the given module and all its …\nReturns moniker of symbol at position.\nReturns a <code>LineIndex</code> for the <code>text</code>.\nCreates a new <code>TextRange</code> with the given <code>start</code> and <code>end</code> (…\nCreates a new instance of <code>TextSize</code> from a raw <code>u32</code>.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe text size of some primitive text-like object.\nTransforms the <code>LineCol</code> into a <code>TextSize</code>.\nReturns an edit which should be applied after a character …\nReturns an edit which should be applied when opening a new …\nWhether to highlight operator\nRelative order of the two ranges (overlapping ranges are …\nComputes outgoing calls for the given file position.\nReturns a <code>mod name;</code> declaration which created the current …\nGets the syntax tree of the file.\nNB: this clears the database\nSet for postfix snippet item completions\nWhether to highlight punctuation\nThe text range this inlay hint applies to.\nIndicates that a reference or mutable reference to this …\nReturns the set of tests for the given file position.\nWe use this to sort completion. Relevance records facts …\nReturns crates this file <em>might</em> belong too.\nThe intersection of a source flags value with the …\nRemove the crate from crate graph. If any crates depend on …\nRemoves all crates from this crate graph except for the …\nReturns the edit required to rename reference at the …\nThis is set for completions that will insert a <code>use</code> item.\nResolves additional completion data at the position given.\nReturns the set of possible targets to run for the current …\nProvides a relevance score. Higher values are more …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nComputes parameter information at the given position.\nBuild a empty search scope spanning the given file.\nComputing source change sometimes is much more costly then …\nRange of identifier that is being completed.\nWhether to specialize operator highlights\nWhether to specialize punctuation highlights\nThe start point of this range.\nDebug info about the current state of the analysis.\nWhether to highlight strings\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nFuzzy searches for a symbol.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nWhether to highlight unresolved things be their syntax\nReturns a syntax tree represented as <code>String</code>, for debug …\nTarget ranges are used to sort assists: the smaller the …\nWhat happens when user selects this item.\nText edit to apply when “accepting” this inlay hint.\nTransforms the <code>WideLineCol</code> with the given <code>WideEncoding</code> …\nTransforms the <code>LineCol</code> with the given <code>WideEncoding</code> into a …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe tooltip to show when hovering over the inlay hint, …\nReturns an iterator over all transitive dependencies of …\nReturns all transitive reverse dependencies of the given …\nReturns crates this file belongs too.\nIf completing a function call, ask the editor to show …\nTransforms the <code>TextSize</code> into a <code>LineCol</code>.\nSee CompletionRelevanceTypeMatch doc comments for cases …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nCreate a range up to the given end (<code>..end</code>).\nRenders the crate graph to GraphViz “dot” syntax.")