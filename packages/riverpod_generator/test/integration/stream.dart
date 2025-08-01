import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'stream.g.dart';

@riverpod
Stream<List<ItemT>> generic<ItemT extends num>(Ref ref) async* {
  yield <ItemT>[];
}

@riverpod
class GenericClass<StateT extends num> extends _$GenericClass<StateT> {
  @override
  Stream<List<StateT>> build() async* {
    yield <StateT>[];
  }
}

@riverpod
Stream<String> public(Ref ref) {
  return Stream.value('Hello world');
}

const privateProvider = _privateProvider;

@riverpod
Stream<String> _private(Ref ref) {
  return Stream.value('Hello world');
}

@riverpod
Stream<String> family(
  Ref ref,
  int first, {
  String? second,
  required double third,
  bool fourth = true,
  List<String>? fifth,
}) {
  return Stream.value(
    '(first: $first, second: $second, third: $third, fourth: $fourth, fifth: $fifth)',
  );
}

@riverpod
class PublicClass extends _$PublicClass {
  PublicClass([this.param]);

  final Object? param;

  @override
  Stream<String> build() {
    return Stream.value('Hello world');
  }
}

const privateClassProvider = _privateClassProvider;

@riverpod
class _PrivateClass extends _$PrivateClass {
  @override
  Stream<String> build() {
    return Stream.value('Hello world');
  }
}

@riverpod
class FamilyClass extends _$FamilyClass {
  FamilyClass([this.param]);

  final Object? param;

  @override
  Stream<String> build(
    int first, {
    String? second,
    required double third,
    bool fourth = true,
    List<String>? fifth,
  }) {
    return Stream.value(
      '(first: $first, second: $second, third: $third, fourth: $fourth, fifth: $fifth)',
    );
  }
}
